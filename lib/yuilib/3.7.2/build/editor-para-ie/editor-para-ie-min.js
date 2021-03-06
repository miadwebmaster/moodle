/*
YUI 3.7.2 (build 5639)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("editor-para-ie",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)},r="host",i="body",s="nodeChange",o="parentNode",u=i+" > p",a="p",f="<br>",l="firstChild",c="li";e.extend(n,e.Plugin.EditorParaBase,{_onNodeChange:function(e){var t=this.get(r),n=t.getInstance(),i,s,o,u,f,l=n.EditorSelection.DEFAULT_BLOCK_TAG,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C=":last-child";switch(e.changedType){case"enter-up":var k=this._lastPara?this._lastPara:e.changedNode,L=k.one("br.yui-cursor");this._lastPara&&delete this._lastPara,L&&(L.previous()||L.next())&&L.ancestor(a)&&L.remove();if(!k.test(l)){var A=k.ancestor(l);A&&(k=A,A=null)}if(k.test(l)){var O=k.previous(),M,_,D=!1;if(O){M=O.one(C);while(!D)M?(_=M.one(C),_?M=_:D=!0):D=!0;M&&t.copyStyles(M,k)}}break;case"enter":if(e.changedNode.test("br"))e.changedNode.remove();else if(e.changedNode.test("p, span")){var L=e.changedNode.one("br.yui-cursor");L&&L.remove()}}},initializer:function(){var t=this.get(r);if(t.editorBR){e.error("Can not plug EditorPara and EditorBR at the same time.");return}t.on(s,e.bind(this._onNodeChange,this))}},{NAME:"editorPara",NS:"editorPara",ATTRS:{host:{value:!1}}}),e.namespace("Plugin"),e.Plugin.EditorPara=n},"3.7.2",{requires:["editor-para-base"]});
