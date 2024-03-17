import {Link, Outlet} from 'react-router-dom';
import {useUserContext} from '../hooks/ContextHooks';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  if (!user) {
    handleAutoLogin();
  }

  return (
    <>
      <header>
        <h1 className="p-4 text-6xl font-bold font-weight:900">Gaming Pictures</h1>
        <nav>
          <ul className="flex justify-between bg-slate-600">
            <li>
              <Link
                className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                to="/"
              >
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                    to="/upload"
                  >
                    Upload
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                    to="/logout"
                  >
                    Logout
                  </Link>
                </li>
                <li>
                <div className="ms-20 flex w-[100%] items-center justify-between">
                <input
                  type="search"
                  className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-20 py-1.5 
                  text-base font-normal text-black transition duration-300 ease-in-out focus:border-primary focus:text-gray-950 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/100 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
                  placeholder="Search"
                  value= {searchvalue}
                  onChange = HandleSearch
                  aria-label="Search"
                  aria-describedby="button-addon2" />
                <span
                 className="flex items-center whitespace-nowrap rounded pr-20 py-3.5 text-left text-base font-normal text-black dark:text-white [&>svg]:w-7"
                  id="basic-addon2">
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd" />
        </svg>
      </span>
      </div>
              </li>
              </>
            ) : (
              <li>
                <Link
                  className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                  to="/login"
                >
                  Login
                </Link>
              </li>
      
            )}
           
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
      <footer className="flex justify-end bg-slate-950 p-4">
        <p>Copyright 2024 - NN</p>
      </footer>
    </>
  );
};

export default Layout;
