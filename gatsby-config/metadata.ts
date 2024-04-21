import pkgJson from '../package.json';

export const NO_SIDER_URI_PATTERN = /^\/(?:getting-started)?(?:\?.*)?$/;

export default {
    _24Hours: 8.64e7,
    contact: pkgJson.author.email,
    copyright: 'This website is a copyright of webKrafters Inc. 2024-Present',
    darkmodeKey: 'DKM',
    description: pkgJson.description,
    device: {
        backgroundColor: '#fffaf6',
        maxWidth: {
            handheldPortait: 991
        },
        themeColor: '#fc084d'
    },
    language: 'en',
    title: pkgJson.name
        .replace( /-docs$/i, '-jS' )
        .split( /-+/ )
        .map(( t : string ) => `${ t[ 0 ].toUpperCase() }${ t.substring( 1 ) }` )
        .join( ' ' ),
    url: {
        demo: 'https://codesandbox.io/s/github/webKrafters/react-observable-context-app',
        npm: 'https://www.npmjs.com/package/@webkrafters/auto-immutable',
        repo: pkgJson.repository.url,
        site: pkgJson.homepage
    }
};