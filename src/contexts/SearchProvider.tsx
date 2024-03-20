import { Dispatch, SetStateAction, createContext, useState } from 'react';

type SearchContextType = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextType | null>(null);

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState<string>('');

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchProvider, SearchContext };