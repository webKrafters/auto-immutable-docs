"use strict";(self.webpackChunkauto_immutable_docs=self.webpackChunkauto_immutable_docs||[]).push([[2748],{73521:function(e,n,t){t.r(n),t.d(n,{Head:function(){return m}});var a=t(67294),l=t(75591),u=t(30645),r=t(41520);n.default=e=>{let{className:n}=e;return a.createElement("article",{className:`set-method-api-set-tag-page ${n}`},a.createElement("h1",null,"@@SET Tag Usage"),a.createElement("strong",null,"Signature 1:"),a.createElement("pre",null,"{ '@@SET': <any> }"),a.createElement("p",null," "," "),a.createElement("strong",null,"Signature 2:"),a.createElement("pre",null,"{ '@@SET': ( currentValue: <any> ) => <any> }"),a.createElement("p",null,"This tag is mainly for handling edge cases."),a.createElement("p",null,"Please use sparingly. In most cases, consumer.set with or without any of the other tags is sufficient and most efficient."),a.createElement("p",null,"This and the '",a.createElement("strong",null,a.createElement(u.Z,{to:"/api/method/set/tags/replace-usage"},"@@REPLACE")),"' tags are functionally equivalent when used with a replacement value argument."),a.createElement("p",null,"Be aware that the compute function argument may be ",a.createElement("code",null,"undefined")," for properties which do not yet exist in the aImmutable data."),a.createElement("h3",null,"Example:"),a.createElement(r.Z,null,"import AutoImmutable, { Tag } from 'auto-immutable';\n\nconst protectedData = {\n    a: {\n        b: [\n            { x: 7, y: 8, z: 9 },\n            { x: 17, y: 18, z: 19 }\n        ]\n    },\n    j: 10\n};\n\nconst aImmutable = new AutoImmutable( protectedData );\nconst consumer = aImmutable.connect();\n\n/* rewrites aImmutable data to { ...aImmutable data, a: 'Demo', j: 17 } */\nconsumer.set({\n    [ Tag.SET ]: currentValue => ({\n        ...currentValue,\n        a: 'Demo',\n        j: 17\n    })\n});\n\n/* rewrites aImmutable data.a to { ...aImmutable data, message: 'Testing...' } */\nconsumer.set({\n    a: {\n        [ Tag.SET ]: currentValue => ({\n            ...currentValue,\n            message: 'Testing...'\n        })\n    }\n});\n\n//  rewrites aImmutable data.a.b[1] to { x: 97, y: 98, z: 99 };\n//  leaving aImmutable data.a.b = [\n//       { x: 7, y: 8, z: 9 },\n//       { x: 97, y: 98, z: 99 }\n//  ]\nconsumer.set({\n    a: {\n        b: [\n            aImmutable data.a.b[ 0 ],\n            {\n                [ Tag.SET ]: currentValue => ({\n                    ...currentValue,\n                    x: 97,\n                    y: 98,\n                    z: 99\n                })\n            }\n        ]\n    }\n});\n\n//  rewrites aImmutable data.a.b[1] to { x: 97, y: 98, z: 99 };\n//  leaving aImmutable data.a.b = [\n//     { x: 7, y: 8, z: 9 },\n//     { x: 97, y: 98, z: 99 }\n//  ]\n//  uses indexing (RECOMMENDED)\nconsumer.set({\n    a: {\n        b: {\n            1: {\n                [ Tag.SET ]: currentValue => ({\n                    ...currentValue,\n                    x: 97,\n                    y: 98,\n                    z: 99\n                })\n            }\n        }\n    }\n});"))};const m=()=>a.createElement("title",null,l.default.title,": @@SET")}}]);
//# sourceMappingURL=component---src-pages-api-method-set-tags-set-usage-tsx-5804806ffb5a36e49304.js.map