/**
 * This file contains all the paths that exists in this APP, to centralize all the props
 * and change only in this file the props of each pathname
 */

interface PathProps {
  login: Pathname;
  homepage: Pathname;
}

export interface Pathname {
  path: string;
  key: string;
  title: string;
  display: boolean; // Should display in sidebar?
  getPath?: (...args: any[]) => any; // Function to build the path with the parameters that each path need
  checkRole: (role: string) => boolean; // Check the scope of the user
}

export const pathnames: PathProps = {
  login: {
    path: '/login',
    key: 'login',
    title: 'pages.login.title',
    display: false,
    getPath: (): string => '/login',
    checkRole: (): boolean => true
  },
  homepage: {
    path: '/homepage',
    key: 'homepage',
    title: 'pages.homepage.title',
    display: true,
    getPath: (): string => '/app/homepage',
    checkRole: (): boolean => true
  }
};
