(function framework7ComponentLoader(r,s){void 0===s&&(s=!0);var e=r.$,t=r.utils,n=(r.getDevice,r.getSupport,r.Class,r.Modal,r.ConstructorMethods,r.ModalMethods,t.bindMethods);const a={set(){const r=this;for(var s=arguments.length,t=new Array(s),n=0;n<s;n++)t[n]=arguments[n];let[a,o,i]=t;if("number"==typeof t[0]&&([o,i]=t,a=r.$el),null==o)return a;o||(o=0);const p=e(a||r.$el);if(0===p.length)return a;const l=Math.min(Math.max(o,0),100);let g;if(g=p.hasClass("progressbar")?p.eq(0):p.children(".progressbar"),0===g.length||g.hasClass("progressbar-infinite"))return g;let h=g.children("span");return 0===h.length&&(h=e("<span></span>"),g.append(h)),h.transition(void 0!==i?i:"").transform(`translate3d(${(-100+l)*(r.rtl?-1:1)}%,0,0)`),g[0]},show(){const r=this;for(var s=arguments.length,t=new Array(s),n=0;n<s;n++)t[n]=arguments[n];let[a,o,i]=t,p="determined";2===t.length?"string"!=typeof t[0]&&"object"!=typeof t[0]||"string"!=typeof t[1]?"number"==typeof t[0]&&"string"==typeof t[1]&&([o,i]=t,a=r.$el):([a,i,o]=t,p="infinite"):1===t.length?"number"==typeof t[0]?(a=r.$el,o=t[0]):"string"==typeof t[0]&&(p="infinite",a=r.$el,i=t[0]):0===t.length&&(p="infinite",a=r.$el);const l=e(a);if(0===l.length)return;let g;return l.hasClass("progressbar")||l.hasClass("progressbar-infinite")?g=l:(g=l.children(".progressbar:not(.progressbar-out), .progressbar-infinite:not(.progressbar-out)"),0===g.length&&(g=e(`\n            <span class="progressbar${"infinite"===p?"-infinite":""}${i?` color-${i}`:""} progressbar-in">\n              ${"infinite"===p?"":"<span></span>"}\n            </span>`),l.append(g))),void 0!==o&&r.progressbar.set(g,o),g[0]},hide(r,s){void 0===s&&(s=!0);const t=e(r||this.$el);if(0===t.length)return;let n;return n=t.hasClass("progressbar")||t.hasClass("progressbar-infinite")?t:t.children(".progressbar, .progressbar-infinite"),0===n.length||!n.hasClass("progressbar-in")||n.hasClass("progressbar-out")||n.removeClass("progressbar-in").addClass("progressbar-out").animationEnd((()=>{s&&n.remove()})),n}};var o={name:"progressbar",create(){n(this,{progressbar:a})},on:{tabMounted(r){const s=this;e(r).find(".progressbar").each((r=>{const t=e(r);s.progressbar.set(t,t.attr("data-progress"))}))},pageInit(r){const s=this;r.$el.find(".progressbar").each((r=>{const t=e(r);s.progressbar.set(t,t.attr("data-progress"))}))}},vnode:{progressbar:{insert(r){const s=r.elm;this.progressbar.set(s,s.getAttribute("data-progress"))},update(r){const s=r.elm;this.progressbar.set(s,s.getAttribute("data-progress"))}}}};if(s){if(r.prototype.modules&&r.prototype.modules[o.name])return;r.use(o),r.instance&&(r.instance.useModuleParams(o,r.instance.params),r.instance.useModule(o))}return o}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
