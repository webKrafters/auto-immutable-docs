import type { GatsbySSR } from 'gatsby';

import React, { useContext } from 'react';

import metadata, { NO_SIDER_URI_PATTERN } from './gatsby-config/metadata';

import PageProvider, { UpdaterCtx } from './src/page-context';

import DarkmodeProvider from './src/partials/dark-mode-settings/context';

import Layout from './src/partials/layouts/index';

export const wrapPageElement : GatsbySSR["wrapPageElement"] = ({ element, props }) => {
    useContext( UpdaterCtx )( s => ({
        ...s,
        ...props,
        isNoSiderPage: NO_SIDER_URI_PATTERN.test( props.uri )
    }) );
    return ( <Layout { ...props }>{ element }</Layout> );
};

export const wrapRootElement : GatsbySSR["wrapRootElement"] = ({ element }) => (
    <PageProvider>
        <DarkmodeProvider>
            { element }
        </DarkmodeProvider>
    </PageProvider>
);

export const onRenderBody : GatsbySSR["onRenderBody"] = ({
    setBodyAttributes, setHeadComponents
}) => {
    const { device: { themeColor } } = metadata;
    setBodyAttributes({ className: 'dark' });
    setHeadComponents([
        <link key="mask-icon" rel="mask-icon" href="/safari-pinned-tab.svg" color={ themeColor } />,
        <meta key="msapp-tile" name="msapplication-TileColor" content={ themeColor } />,
    ]);
};

