// skills.js CORRIGÉ
import { 
  Server, 
  Network, 
  Shield, 
  Code, 
  Database, 
  Activity, 
  Lock, 
  Settings, 
  Ticket, 
  HardDrive 
} from 'lucide-react'

export const skillsData = [
  { 
    icon: Server, 
    name: 'Administration Serveurs', 
    level: 90, 
    color: 'from-blue-500 to-cyan-500' 
  },
  { 
    icon: Network, 
    name: 'Réseaux & Infrastructure', 
    level: 85, 
    color: 'from-purple-500 to-pink-500' 
  },
  { 
    icon: Shield, 
    name: 'Cybersécurité', 
    level: 80, 
    color: 'from-red-500 to-orange-500' 
  },
  { 
    icon: Code, 
    name: 'Scripting (PowerShell, Bash)', 
    level: 75, 
    color: 'from-green-500 to-emerald-500' 
  },
  {
    icon: Server,
    name: 'Active Directory & GPO',
    level: 70,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Database,
    name: 'Sauvegarde & PRA',
    level: 60,
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Activity,
    name: 'Supervision (Zabbix, Nagios)',
    level: 55,
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Lock,
    name: 'VPN & Accès Distant',
    level: 65,
    color: 'from-cyan-500 to-teal-600',
  },
  {
    icon: Settings,
    name: 'Ansible & Automatisation',
    level: 50,
    color: 'from-red-500 to-orange-600',
  },
  {
    icon: Ticket,
    name: 'Ticketing (GLPI, ServiceNow)',
    level: 55,
    color: 'from-amber-500 to-yellow-600',
  },
  {
    icon: Network,
    name: 'Protocoles Réseau (OSPF, BGP)',
    level: 60,
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: HardDrive,
    name: 'Stockage NAS',
    level: 55,
    color: 'from-slate-500 to-gray-600',
  }
]