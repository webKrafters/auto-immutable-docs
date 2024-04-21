import { PageProps as P } from 'gatsby';

import React, { createContext, useState } from 'react';

export type PageProps = Partial<P & {
    isNoSiderPage : boolean
}>;

export const UpdaterCtx = createContext<React.Dispatch<React.SetStateAction<PageProps>>>(()=>{});
export const ValueCtx = createContext<PageProps>({});

const Provider : React.FC<{children : React.ReactNode}> = ({ children }) => {
    const [ state, setState ] = useState({});
    return (
        <UpdaterCtx.Provider value={ setState }>
            <ValueCtx.Provider value={ state }>
                { children }
            </ValueCtx.Provider>
        </UpdaterCtx.Provider>
    );
};

export default Provider;