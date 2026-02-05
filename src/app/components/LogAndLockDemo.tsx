import { useState } from 'react';
import { Lock, Plus, Search, Trash2, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface LogEntry {
  id: string;
  title: string;
  timestamp: string;
  status: 'locked' | 'active' | 'completed';
  category: string;
}

export function LogAndLockDemo() {
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: '1',
      title: 'Security Protocol Alpha',
      timestamp: '2026-02-01 14:30',
      status: 'locked',
      category: 'Security'
    },
    {
      id: '2',
      title: 'Data Backup Process',
      timestamp: '2026-02-01 13:15',
      status: 'active',
      category: 'Operations'
    },
    {
      id: '3',
      title: 'Team Meeting Notes',
      timestamp: '2026-02-01 10:00',
      status: 'completed',
      category: 'Collaboration'
    },
    {
      id: '4',
      title: 'Compliance Audit Trail',
      timestamp: '2026-01-31 16:45',
      status: 'locked',
      category: 'Compliance'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newLogTitle, setNewLogTitle] = useState('');

  const filteredLogs = logs.filter(log =>
    log.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addLog = () => {
    if (newLogTitle.trim()) {
      const newLog: LogEntry = {
        id: Date.now().toString(),
        title: newLogTitle,
        timestamp: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'active',
        category: 'General'
      };
      setLogs([newLog, ...logs]);
      setNewLogTitle('');
    }
  };

  const toggleLock = (id: string) => {
    setLogs(logs.map(log =>
      log.id === id
        ? { ...log, status: log.status === 'locked' ? 'active' : 'locked' as 'locked' | 'active' | 'completed' }
        : log
    ));
  };

  const deleteLog = (id: string) => {
    setLogs(logs.filter(log => log.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'locked':
        return 'bg-red-900/30 text-red-400 border-red-700';
      case 'active':
        return 'bg-orange-900/30 text-orange-400 border-orange-700';
      case 'completed':
        return 'bg-green-900/30 text-green-400 border-green-700';
      default:
        return 'bg-gray-900/30 text-gray-400 border-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'locked':
        return <Lock className="w-4 h-4" />;
      case 'active':
        return <Clock className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-600/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-orange-500" />
            <span className="text-orange-500">Featured Product</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Log & Lock
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The AI-powered logging and security platform that keeps your data organized and protected. 
            Track, secure, and manage everything that matters.
          </p>
        </div>

        {/* Demo Interface */}
        <Card className="bg-gradient-to-br from-gray-900 to-black border-orange-900/50 shadow-2xl max-w-5xl mx-auto">
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-orange-900/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Log & Lock Dashboard</h3>
                  <p className="text-sm text-gray-500">Secure. Organized. Intelligent.</p>
                </div>
              </div>
            </div>

            {/* Add New Log */}
            <div className="mb-6 flex gap-2">
              <Input
                placeholder="Create a new log entry..."
                value={newLogTitle}
                onChange={(e) => setNewLogTitle(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addLog()}
                className="bg-black/50 border-orange-900/50 text-white placeholder:text-gray-600 focus:border-orange-600"
              />
              <Button
                onClick={addLog}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                <Plus className="w-5 h-5" />
              </Button>
            </div>

            {/* Search */}
            <div className="mb-6 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <Input
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black/50 border-orange-900/50 text-white placeholder:text-gray-600 focus:border-orange-600"
              />
            </div>

            {/* Logs List */}
            <div className="space-y-3">
              {filteredLogs.map((log) => (
                <div
                  key={log.id}
                  className="bg-black/40 border border-orange-900/30 rounded-lg p-4 hover:border-orange-600/50 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-white text-lg">{log.title}</h4>
                        <Badge className={getStatusColor(log.status)}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(log.status)}
                            {log.status}
                          </span>
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{log.timestamp}</span>
                        <span>•</span>
                        <span>{log.category}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleLock(log.id)}
                        className="text-orange-500 hover:text-orange-400 hover:bg-orange-900/20"
                      >
                        {log.status === 'locked' ? (
                          <Lock className="w-4 h-4" />
                        ) : (
                          <Shield className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteLog(log.id)}
                        className="text-red-500 hover:text-red-400 hover:bg-red-900/20"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Footer */}
            <div className="mt-8 pt-6 border-t border-orange-900/30 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl text-orange-500 mb-1">{logs.length}</div>
                <div className="text-sm text-gray-500">Total Logs</div>
              </div>
              <div>
                <div className="text-2xl text-red-500 mb-1">
                  {logs.filter(l => l.status === 'locked').length}
                </div>
                <div className="text-sm text-gray-500">Secured</div>
              </div>
              <div>
                <div className="text-2xl text-green-500 mb-1">
                  {logs.filter(l => l.status === 'completed').length}
                </div>
                <div className="text-sm text-gray-500">Completed</div>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-6 text-lg"
          >
            Try Log & Lock Free
          </Button>
        </div>
      </div>
    </section>
  );
}
