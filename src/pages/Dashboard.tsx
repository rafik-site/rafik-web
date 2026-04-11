import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import CryptoJS from 'crypto-js';
import { 
  PlusCircle, 
  History, 
  LogOut, 
  LayoutDashboard, 
  Copy, 
  CheckCircle2, 
  Search,
  Key,
  Monitor,
  User,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface License {
  id: string;
  nombre_cliente: string;
  hwid_placa: string;
  codigo_generado: string;
  created_at: string;
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'generator' | 'history'>('generator');
  const [nombreCliente, setNombreCliente] = useState('');
  const [hwid, setHwid] = useState('');
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<License[]>([]);
  const [copying, setCopying] = useState(false);
  const navigate = useNavigate();

  const LICENSE_SECRET = 'G7#k92!zP$mQ85*vR29@XyLpW1&nB46^tS0Z';

  useEffect(() => {
    if (activeTab === 'history') {
      fetchHistory();
    }
  }, [activeTab]);

  const fetchHistory = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('licencias')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setHistory(data);
    }
    setLoading(false);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Lógica de generación: SHA-256(HWID + VITE_LICENSE_SECRET)
    const combinedString = `${hwid}${LICENSE_SECRET}`;
    const fullHash = CryptoJS.SHA256(combinedString).toString(CryptoJS.enc.Hex).toUpperCase();
    
    // Formatear como XXXX-XXXX-XXXX-XXXX (usando los primeros 16 caracteres)
    const formattedCode = fullHash.substring(0, 16).match(/.{1,4}/g)?.join('-') || fullHash.substring(0, 16);
    
    // Guardar en Supabase
    const { error } = await supabase.from('licencias').insert([
      {
        nombre_cliente: nombreCliente,
        hwid_placa: hwid,
        codigo_generado: formattedCode,
      },
    ]);

    if (!error) {
      setGeneratedCode(formattedCode);
      setNombreCliente('');
      setHwid('');
    } else {
      console.error('Error saving license:', error);
      alert('Error al guardar la licencia: ' + error.message);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/licencia/login');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopying(true);
    setTimeout(() => setCopying(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col fixed h-full">
        <div className="p-6">
          <div className="flex items-center gap-3 text-orange-500 mb-8">
            <Key className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight text-white">LicenseManager</span>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('generator')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'generator' 
                  ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20 shadow-lg shadow-orange-500/5' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <PlusCircle className="w-5 h-5" />
              <span className="font-medium">Generador</span>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'history' 
                  ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20 shadow-lg shadow-orange-500/5' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <History className="w-5 h-5" />
              <span className="font-medium">Historial</span>
            </button>
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-800 bg-slate-900/50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all group"
          >
            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto">
          <header className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {activeTab === 'generator' ? 'Generar Nueva Licencia' : 'Historial de Licencias'}
              </h1>
              <p className="text-slate-400">
                {activeTab === 'generator' 
                  ? 'Ingresa los datos del cliente para generar un código único SHA-256.' 
                  : 'Revisa y gestiona todas las licencias emitidas anteriormente.'}
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl flex items-center gap-2 text-sm text-slate-400">
              <User className="w-4 h-4" />
              <span>Admin Panel</span>
            </div>
          </header>

          {activeTab === 'generator' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
                <form onSubmit={handleGenerate} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                      <User className="w-4 h-4 text-orange-500" /> Nombre del Cliente
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Juan Pérez"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all border-l-4 border-l-orange-500"
                      value={nombreCliente}
                      onChange={(e) => setNombreCliente(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-orange-500" /> HWID (ID Placa Base)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: 56F8-992A-..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all border-l-4 border-l-orange-500"
                      value={hwid}
                      onChange={(e) => setHwid(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-orange-500/10 flex items-center justify-center gap-3 disabled:opacity-50 active:scale-95"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <PlusCircle className="w-5 h-5" />
                        Generar Código de Licencia
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Result Section */}
              <div className="flex flex-col gap-6">
                <div className={`bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 h-full flex flex-col justify-center items-center text-center transition-all ${generatedCode ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                  {generatedCode ? (
                    <>
                      <div className="bg-green-500/10 p-4 rounded-full border border-green-500/20 mb-6 animate-bounce">
                        <CheckCircle2 className="w-10 h-12 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">¡Licencia Generada!</h3>
                      <p className="text-slate-400 mb-8 text-sm">Copia el código y entrégalo al cliente.</p>
                      
                      <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-6 relative group">
                        <p className="text-orange-500 font-mono text-sm break-all leading-relaxed">
                          {generatedCode}
                        </p>
                        <button
                          onClick={() => copyToClipboard(generatedCode)}
                          className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white"
                          title="Copiar código"
                        >
                          {copying ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-slate-800/50 p-6 rounded-full mb-6">
                        <Key className="w-12 h-12 text-slate-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-500 mb-2">Esperando Datos</h3>
                      <p className="text-slate-600 max-w-xs mx-auto">Completa el formulario de la izquierda para generar una nueva licencia técnica.</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="text" 
                    placeholder="Buscar por cliente o HWID..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500/50"
                  />
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={fetchHistory}
                    className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors"
                  >
                    <History className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-950/50 text-slate-400 text-xs uppercase tracking-wider font-semibold">
                      <th className="px-6 py-4 border-b border-slate-800">Cliente</th>
                      <th className="px-6 py-4 border-b border-slate-800">HWID Placa</th>
                      <th className="px-6 py-4 border-b border-slate-800">Código Generado</th>
                      <th className="px-6 py-4 border-b border-slate-800">Fecha</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {loading ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center">
                          <div className="flex flex-col items-center gap-4">
                            <div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
                            <span className="text-slate-500 text-sm">Cargando licencias...</span>
                          </div>
                        </td>
                      </tr>
                    ) : history.length > 0 ? (
                      history.map((license) => (
                        <tr key={license.id} className="hover:bg-slate-800/30 transition-colors group">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 font-bold text-xs">
                                {license.nombre_cliente.charAt(0).toUpperCase()}
                              </div>
                              <span className="text-sm font-medium text-white">{license.nombre_cliente}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-slate-400 font-mono">{license.hwid_placa}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 max-w-[200px]">
                              <span className="text-xs text-orange-500 font-mono truncate">{license.codigo_generado}</span>
                              <button 
                                onClick={() => copyToClipboard(license.codigo_generado)}
                                className="p-1 hover:bg-slate-700 rounded opacity-0 group-hover:opacity-100 transition-all"
                              >
                                <Copy className="w-3 h-3 text-slate-400" />
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 text-slate-500 text-xs">
                              <Clock className="w-3 h-3" />
                              {new Date(license.created_at).toLocaleDateString()}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center">
                          <div className="flex flex-col items-center gap-2 opacity-30">
                            <Search className="w-12 h-12 mb-2" />
                            <span className="text-slate-400">No hay licencias registradas.</span>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="p-6 border-t border-slate-800 flex justify-between items-center bg-slate-900/50">
                <span className="text-xs text-slate-500">Mostrando {history.length} resultados</span>
                <div className="flex gap-2">
                  <button className="p-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-600 cursor-not-allowed">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-600 cursor-not-allowed">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
