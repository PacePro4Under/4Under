import { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/queryClient';

interface AdminUser {
  email: string;
}

interface AdminState {
  user: AdminUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAdmin() {
  const [state, setState] = useState<AdminState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check for existing token in localStorage
    const savedToken = localStorage.getItem('admin_token');
    const savedUser = localStorage.getItem('admin_user');
    
    console.log('Admin hook initialization - token:', savedToken, 'userStr:', savedUser);
    
    if (savedToken && savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setState({
          user,
          token: savedToken,
          isAuthenticated: true,
          isLoading: false,
        });
        console.log('Admin state restored from localStorage');
      } catch (error) {
        console.error('Error restoring admin state:', error);
        // Clear invalid data
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        setState(prev => ({ ...prev, isLoading: false }));
      }
    } else {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; message?: string }> => {
    try {
      const response = await apiRequest('POST', '/api/admin/login', { email, password });
      
      if (response.success) {
        const { token, user } = response;
        
        // Save to localStorage
        localStorage.setItem('admin_token', token);
        localStorage.setItem('admin_user', JSON.stringify(user));
        
        setState({
          user,
          token,
          isAuthenticated: true,
          isLoading: false,
        });
        
        return { success: true };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error: any) {
      return { 
        success: false, 
        message: error.message || 'Login failed' 
      };
    }
  };

  const logout = async () => {
    try {
      if (state.token) {
        await apiRequest('POST', '/api/admin/logout', {}, {
          headers: {
            'Authorization': `Bearer ${state.token}`
          }
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Always clear local state
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
      setState({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  };

  const getAuthHeaders = () => {
    console.log('getAuthHeaders called - token:', state.token, 'isAuthenticated:', state.isAuthenticated);
    if (!state.token) return {};
    return {
      'Authorization': `Bearer ${state.token}`
    };
  };

  return {
    ...state,
    login,
    logout,
    getAuthHeaders,
  };
}