"use strict";(self.webpackChunkauto_immutable_docs=self.webpackChunkauto_immutable_docs||[]).push([[8336],{37029:function(n,e,t){t.r(e),t.d(e,{Head:function(){return u}});var a=t(67294),l=t(75591),m=t(41520);e.default=n=>{let{className:e}=n;return a.createElement("article",{className:`set-method-api-splice-tag-page ${e}`},a.createElement("h1",null,"@@SPLICE Tag Usage"),a.createElement("strong",null,"Signature:"),a.createElement("pre",null,"{\n    '@@SPLICE': [\n        -/+fromIndex,\n        deleteCount, // integer >= 0\n        ...newInserts?\n    ]\n}"),a.createElement("h3",null,"Example:"),a.createElement(m.Z,null,"import AutoImmutable, { Tag } from 'auto-immutable';\n\nconst protectedData = {\n    a: {\n        b: [\n            { x: 7, y: 8, z: 9 },\n            { x: 17, y: 18, z: 19 }\n        ]\n    },\n    j: 10,\n    q: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]\n};\n\nconst aImmutable = new AutoImmutable( protectedData );\nconst consumer = aImmutable.connect();\n\n/* assigning a '@@SPLICE' command to a non-array property has no effect. */\nconsumer.set({\n    a: {\n        [ Tag.SPLICE ]: [ 0, 1 ]\n    }\n});\n\n//  removes aImmutable data.a.b[0];\n//  leaving aImmutable data.a.b = [\n//     { x: 17, y: 18, z: 19 }\n//  ]\nconsumer.set({\n    a: {\n        b: {\n            [ Tag.SPLICE ]: [ 0, 1 ] // or [ -2, -1 ] with negative indexing\n        }\n    }\n});\n\n//  replaces aImmutable data.q[4] - [7] with 2 items;\n//  leaving aImmutable data.q = [ 1, 2, 3, 4, 33, 88, 9 ]\nconsumer.set({\n    a: {\n        q: {\n            [ Tag.SPLICE ]: [ 4, 4, 33, 88 ]\n                            // or [ -5, 4, 33, 88 ] with negative indexing\n        }\n    }\n});"))};const u=()=>a.createElement("title",null,l.default.title,": @@SPLICE")}}]);
//# sourceMappingURL=component---src-pages-api-method-set-tags-splice-usage-tsx-f4c6c73cfe6b6c577516.js.map