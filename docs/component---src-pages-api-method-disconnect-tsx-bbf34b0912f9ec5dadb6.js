"use strict";(self.webpackChunkauto_immutable_docs=self.webpackChunkauto_immutable_docs||[]).push([[3821],{54341:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var o=t(67294),c=t(30645),s=t(41520);const a=e=>{let{children:n}=e;return o.createElement("p",{className:"note-pad"},o.createElement("strong",{className:"title"},"Note:")," ",o.Children.map(n,(e=>e)))};a.displayName="NotePad";var l=a;var m=e=>{let{className:n}=e;return o.createElement("article",{className:`disconnect-method-api-page ${n}`},o.createElement("h1",null,"Disconnecting from Source"),o.createElement("p",null,"Any AutoImmutable instance communicates with its environment through its own ",o.createElement(c.Z,{to:"/api#consumer"},o.createElement("code",null,"Connection class"))," (the consumer) instances."),o.createElement("p",null,"The Connection's ",o.createElement("strong",null,o.createElement("code",null,"disconnect(...)"))," parameterless method of the ",o.createElement("code",null,"Connection")," instance provides the means for disconnecting itself from its AutoImmutable instance."),o.createElement("p",null,"This method also prompts the source AutoImmutable instance to deallocate all resources dedicated to the disconnecting consumer."),o.createElement(s.Z,null,"import AutoImmutable from 'auto-immutable';\n\nconst aImmutable = new AutoImmutable({\n    a: {\n        b: {\n            c: 22\n            d: 60\n         },\n         x: 99\n    }\n});\n\nconst consumer = aImmutable.connect(); // returns a consumer for this AutoImmutable instance\n\nconsumer.get( 'a.b.d', 'a.x' );\n// returns {\n//    'a.b.d': 60,\n//    'a.x': 99\n// }\n\nconsole.log( consumer.instanceId ); // prints this consumer's unique id\n\nconsole.log( consumer.disconnected ); // prints `false`\n\nconsumer.disconnect(); // severs connection to the AutoImmutable instance.\n\nconsole.log( consumer.disconnected ); // prints `true`\n\nconsumer.get( 'a.b.d', 'a.x' ); // returns `undefined`\n\nconsumer.set({ a: { x: 1000 } }); // cannot update the immutable data\n\n/* ----------------------------------------------------- */\n\nconst consumer1 = aImmutable.connect();\n\nconsumer1.get( 'a.b.d', 'a.x' );\n// returns {\n//    'a.b.d': { m: 70 },\n//    'a.x': 99\n// }\n\nconsole.log( consumer.disconnected ); // prints `false`"),o.createElement("h2",null,"Further Considerations"),o.createElement("p",null,"This method serves as the final association between a consumer and its source AutoImmutable instance."),o.createElement("p",null,"Once issued, the instant consumer loses accessibility to its source AutoImmutable instance."),o.createElement(l,null,"calling an AutoImmutable ",o.createElement("strong",null,o.createElement("code",null,"close(...)"))," method summarily disconnects all its connected consumers. This instant consumer, if connected to the given AutoImmutable instance, will be disconnected as well."),o.createElement(s.Z,null,"import AutoImmutable from 'auto-immutable';\n\nconst protectedData = {\n    a: {\n        b: {\n            c: 22\n            d: 60\n         },\n         x: 99\n    }\n};\n\ntype Data = typeof protectedData;\n\nconst aImmutable = new AutoImmutable<ProtectedData>( protectedData );\n\nconsole.log( aImmutable.closed )\n// prints `false`;\n\nconst consumers : Array<Connection<ProtectedData>> = [];\n\nfor( let c = 5; c--; ) {\n    consumers.push( aImmutable.connect();\n}\n\nconsumers.forEach( c => console.log( c.disconnected ) );\n// prints `false` 5 times\n\nconsumers.forEach( c => console.log( c.get( 'a.x' ) ) );\n// prints `{'a.x': 99}` 5 times;\n\naImmutable.close();\n\nconsole.log( aImmutable.closed )\n// prints `true`;\n\nconsumers.forEach( c => console.log( c.disconnected ) );\n// prints `true` 5 times\n\nconsumers.forEach( c => console.log( c.get( 'a.x' ) ) );\n// prints `undefined` 5 times;"))}}}]);
//# sourceMappingURL=component---src-pages-api-method-disconnect-tsx-bbf34b0912f9ec5dadb6.js.map