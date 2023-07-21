import{m}from"./index-4245e63e.js";import{e as d}from"./index-97cad2bf.js";import{c as g}from"./index-35b52911.js";import{c as N,j as e,a as t,F as b}from"./index-b95677c8.js";import{S as a}from"./index-096c861c.js";function f(n){return t(b,{children:[t(b,{children:[t("label",{className:`menu-btn ${n.injected.flags.uploadFile?"":"menu-btn-hidden"}`,children:[e("div",{className:"menu-btn-img",children:e(a,{asset:n.injected.assets["image.icon.uploadFile"]})}),e("input",{type:"file",className:"menu-btn-input",multiple:!0})]}),t("button",{className:`menu-btn ${n.injected.flags.recording?"":"menu-btn-hidden"}`,children:[e("p",{className:"menu-btn-label",children:e("span",{children:"Start animation Recording"})}),e("div",{className:"menu-btn-img",children:e(a,{asset:n.injected.assets["image.icon.startRecording"]})})]}),t("button",{className:`menu-btn ${n.injected.flags.recording?"":"menu-btn-hidden"}`,children:[e("p",{className:"menu-btn-label",children:e("span",{children:"Stop animation Recording"})}),e("div",{className:"menu-btn-img",children:e(a,{asset:n.injected.assets["image.icon.stopRecording"]})})]}),t("button",{className:`menu-btn ${n.injected.flags.exportDrawing?"":"menu-btn-hidden"}`,children:[e("p",{className:"menu-btn-label",children:e("span",{children:"Save mouse artwork as PNG"})}),e("div",{className:"menu-btn-img",children:e(a,{asset:n.injected.assets["image.icon.exportDrawing"]})})]}),t("label",{className:`menu-btn ${n.injected.flags.loadProject?"":"menu-btn-hidden"}`,children:[e("div",{className:"menu-btn-img",children:e(a,{asset:n.injected.assets["image.icon.loadProject"]})}),e("input",{type:"file",className:"menu-btn-input",accept:"text/html"})]}),t("button",{className:`menu-btn ${n.injected.flags.saveProject?"":"menu-btn-hidden"}`,children:[e("p",{className:"menu-btn-label",children:e("span",{children:"Save Project as HTML"})}),e("div",{className:"menu-btn-img",children:e(a,{asset:n.injected.assets["image.icon.saveProjectHTML"]})})]})]}),t("button",{className:`menu-btn ${n.states.running?"menu-btn-hidden":""}`,onClick:()=>n.handlers.run?n.handlers.run():void 0,children:[e("p",{className:"menu-btn-label",children:e("span",{children:n.injected.i18n["menu.run"]})}),e("div",{className:"menu-btn-img",children:e(a,{asset:n.injected.assets["image.icon.run"]})})]}),t("button",{className:`menu-btn ${n.states.running?"":"menu-btn-hidden"}`,onClick:()=>n.handlers.stop?n.handlers.stop():void 0,children:[e("p",{className:"menu-btn-label",children:e("span",{children:n.injected.i18n["menu.stop"]})}),e("div",{className:"menu-btn-img",children:e(a,{asset:n.injected.assets["image.icon.stop"]})})]}),t("button",{className:"menu-btn",onClick:()=>n.handlers.reset?n.handlers.reset():void 0,children:[e("p",{className:"menu-btn-label",children:e("span",{children:n.injected.i18n["menu.reset"]})}),e("div",{className:"menu-btn-img",children:e(a,{asset:n.injected.assets["image.icon.reset"]})})]})]})}let r;async function o(n,s){return r===void 0&&(r=N(n)),r.render(e(f,{...s})),new Promise(h=>requestAnimationFrame(()=>h()))}let i,c;async function j(){c=g({location:"toolbar",type:"container",position:"cluster-b"}),c.id="menu",i={injected:v,states:{running:!1},handlers:{}},await o(c,{...i})}async function l(n,s){i.states[n]=s,await o(c,{...i})}async function u(n,s){i.handlers[n]=s,await o(c,{...i})}async function P(){await j()}async function S(){await u("run",()=>{m.getCrumbs().length!==0&&m.run(m.getCrumbs()[0].nodeID),l("running",!0),setTimeout(()=>l("running",!1)),d("menu.run")}),await u("stop",()=>{l("running",!1),d("menu.stop")}),await u("reset",()=>{l("running",!1),d("menu.reset")})}const v={flags:void 0,i18n:void 0,assets:void 0};export{v as injected,P as mount,S as setup};
//# sourceMappingURL=module.menu-9b2a1c75.js.map
