// mockData.ts

export interface User {
    id: string;
    name: string;
    email: string;
    contactNumber: string;
    role: string;
    status: 'active' | 'inactive';
    lastActive: string;
    avatarUrl: string;
    address: string;
    joinDate: string;
    department: string;
    projects: string[];
    skills: string[];
  }
  
  export const mockUsers: User[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@example.com',
      contactNumber: '+91 98765 43210',
      role: 'Admin',
      status: 'active',
      lastActive: '2 minutes ago',
      avatarUrl: '/api/placeholder/40/40',
      address: '42, Sai Colony, Powai, Mumbai, Maharashtra 400076',
      joinDate: 'January 15, 2023',
      department: 'IT',
      projects: ['ERP Implementation', 'Cloud Migration'],
      skills: ['Project Management', 'Team Leadership', 'System Architecture']
    },
    {
      id: '2',
      name: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      contactNumber: '+91 87654 32109',
      role: 'Manager',
      status: 'active',
      lastActive: '5 hours ago',
      avatarUrl: '/api/placeholder/40/40',
      address: '15, Green Park Extension, New Delhi, Delhi 110016',
      joinDate: 'March 3, 2023',
      department: 'Marketing',
      projects: ['Digital Marketing Campaign', 'Brand Expansion'],
      skills: ['Digital Marketing', 'Content Strategy', 'Market Analysis']
    },
    {
      id: '3',
      name: 'Amit Patel',
      email: 'amit.patel@example.com',
      contactNumber: '+91 76543 21098',
      role: 'Developer',
      status: 'active',
      lastActive: '1 hour ago',
      avatarUrl: '/api/placeholder/40/40',
      address: '78, Satellite Road, Ahmedabad, Gujarat 380015',
      joinDate: 'June 12, 2023',
      department: 'Engineering',
      projects: ['Mobile App Development', 'Payment Gateway Integration'],
      skills: ['React', 'Node.js', 'TypeScript']
    },
    {
      id: '4',
      name: 'Deepika Reddy',
      email: 'deepika.reddy@example.com',
      contactNumber: '+91 65432 10987',
      role: 'Designer',
      status: 'inactive',
      lastActive: '3 days ago',
      avatarUrl: '/api/placeholder/40/40',
      address: '23, Jubilee Hills, Hyderabad, Telangana 500033',
      joinDate: 'April 22, 2023',
      department: 'Design',
      projects: ['UI/UX Redesign', 'Mobile App Design'],
      skills: ['UI Design', 'Figma', 'Adobe XD']
    },
    {
      id: '5',
      name: 'Anand Verma',
      email: 'anand.verma@example.com',
      contactNumber: '+91 54321 09876',
      role: 'Analyst',
      status: 'active',
      lastActive: 'Just now',
      avatarUrl: '/api/placeholder/40/40',
      address: '56, Koramangala, Bangalore, Karnataka 560034',
      joinDate: 'August 8, 2023',
      department: 'Analytics',
      projects: ['Data Visualization', 'Business Intelligence'],
      skills: ['Data Analysis', 'Python', 'Tableau']
    }
  ];
  
  // Helper function to fetch a single user by ID
  export const getUserById = (id: string): User | null => {
    return mockUsers.find(user => user.id === id) || null;
  };
  
  export const filterUsers = (searchTerm: string): User[] => {
    const term = searchTerm.toLowerCase();
    return mockUsers.filter(user => 
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.role.toLowerCase().includes(term) ||
      user.department.toLowerCase().includes(term)
    );
  };
  
  export const sortUsers = (users: User[], field: keyof User, direction: 'asc' | 'desc'): User[] => {
    return [...users].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
      
      if (direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });
  };
  

interface StatusBadgeProps {
  status: 'active' | 'inactive';
}
