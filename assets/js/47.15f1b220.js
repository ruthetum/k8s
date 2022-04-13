(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{447:function(t,a,s){"use strict";s.r(a);var e=s(17),n=function(t){t.options.__data__block__={mermaid_64a570a6:"sequenceDiagram\n  autonumber\n  participant A as API Server\n  participant R as ReplicaSet<br />Controller\n  participant S as Scheduler\n  Note left of A: replicaset.yml\n\n  rect rgb(236, 240, 241)\n    loop\n      R->>A: ReplicaSet 조건 체크\n      R->>A: 조건을 만족하기 위해 Pod 생성,제거\n    end\n  end\n\n  loop\n    S->>A: 할당되지 않은 Pod 감시\n    S->>A: Pod을 노드에 할당\n  end\n\n  Note right of S: Kubelet,<br>Container,<br>..(생략)..\n"}},r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"replicaset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replicaset"}},[t._v("#")]),t._v(" ReplicaSet")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("⚡️ 목표")]),t._v(" "),s("p",[t._v("ReplicaSet(복제셋)이 무엇인지 알아보고 ReplicaSet을 이용하여 Pod을 관리하는 방법을 살펴봅니다.")])]),t._v(" "),s("p",[t._v("Pod을 단독으로 만들면 Pod에 어떤 문제(서버가 죽어서 Pod이 사라졌다던가)가 생겼을 때 자동으로 복구되지 않습니다. 이러한 Pod을 정해진 수만큼 복제하고 관리하는 것이 ReplicaSet입니다.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#replicaset-만들기"}},[t._v("ReplicaSet 만들기")])]),s("li",[s("a",{attrs:{href:"#스케일-아웃"}},[t._v("스케일 아웃")])]),s("li",[s("a",{attrs:{href:"#마무리"}},[t._v("마무리")])]),s("li",[s("a",{attrs:{href:"#참고"}},[t._v("참고")])]),s("li",[s("a",{attrs:{href:"#문제"}},[t._v("문제")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"replicaset-만들기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replicaset-만들기"}},[t._v("#")]),t._v(" ReplicaSet 만들기")]),t._v(" "),s("p",[t._v("이전에 만든 Pod을 ReplicaSet으로 만들어 봅니다.")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")])]),s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ReplicaSet\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rs\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" app\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" app\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ghcr.io/subicura/echo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1\n")])])]),s("code-link",{attrs:{link:"guide/replicaset/echo-rs.yml"}}),t._v(" "),s("p",[t._v("Pod보다 설정이 조금 복잡하지만, 각 항목을 이해하면 아주 어렵지 않습니다. 일단 생성하고 상세 내용을 봅시다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ReplicaSet 생성")]),t._v("\nkubectl apply -f echo-rs.yml\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 리소스 확인")]),t._v("\nkubectl get po,rs\n")])])]),s("p",[s("strong",[t._v("실행 결과")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NAME                READY   STATUS    RESTARTS   AGE\npod/echo-rs-tcdwj   1/1     Running   0          61s\n\nNAME                      DESIRED   CURRENT   READY   AGE\nreplicaset.apps/echo-rs   1         1         1       61s\n")])])]),s("p",[t._v("ReplicaSet과 Pod이 같이 생성된 것을 볼 수 있습니다.")]),t._v(" "),s("div",{staticStyle:{"text-align":"center",width:"400px","max-width":"100%",margin:"0 auto"}},[s("custom-image",{attrs:{src:"/imgs/guide/replicaset/rs.png",alt:"ReplicaSet"}})],1),t._v(" "),s("p",[t._v("ReplicaSet은 "),s("code",[t._v("label을 체크")]),t._v("해서 "),s("code",[t._v("원하는 수")]),t._v("의 Pod이 없으면 "),s("code",[t._v("새로운 Pod")]),t._v("을 생성합니다. 이를 설정으로 표현하면 다음과 같습니다.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("정의")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("spec.selector")])]),t._v(" "),s("td",[t._v("label 체크 조건")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("spec.replicas")])]),t._v(" "),s("td",[t._v("원하는 Pod의 개수")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("spec.template")])]),t._v(" "),s("td",[t._v("생성할 Pod의 명세")])])])]),t._v(" "),s("p",[s("code",[t._v("template")]),t._v("을 자세히 보니 이전에 본 Pod 설정 파일과 "),s("strong",[t._v("완전히 동일")]),t._v("한 것을 알 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" app\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ghcr.io/subicura/echo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1\n")])])]),s("p",[t._v("생성된 Pod의 label을 확인해봅니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("kubectl get pod --show-labels\n")])])]),s("p",[s("strong",[t._v("실행 결과")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NAME            READY   STATUS    RESTARTS   AGE   LABELS\necho-rs-tcdwj   1/1     Running   0          3m    app=echo,tier=app\n")])])]),s("p",[t._v("설정한 대로 "),s("code",[t._v("app=echo,tier=app")]),t._v(" label이 보입니다. 그럼 임의로 label을 제거하면 어떻게 될까요?")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app- 를 지정하면 app label을 제거")]),t._v("\nkubectl label pod/echo-rs-tcdwj app-\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 다시 Pod 확인")]),t._v("\nkubectl get pod --show-labels\n")])])]),s("p",[s("strong",[t._v("실행 결과")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NAME            READY   STATUS    RESTARTS   AGE   LABELS\necho-rs-tcdwj   1/1     Running   0          3m    tier=app\necho-rs-kv4mh   1/1     Running   0          5s    app=echo,tier=app\n")])])]),s("p",[t._v("기존에 생성된 Pod의 "),s("code",[t._v("app")]),t._v(" label이 사라지면서 "),s("code",[t._v("selector")]),t._v("에 정의한 "),s("code",[t._v("app=echo,tier=app")]),t._v(" 조건을 만족하는 Pod의 개수가 0이 되어 새로운 Pod이 만들어졌습니다.")]),t._v(" "),s("p",[t._v("다시 "),s("code",[t._v("app")]),t._v(" label을 추가해봅니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app- 를 지정하면 app label을 제거")]),t._v("\nkubectl label pod/echo-rs-tcdwj "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("echo\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 다시 Pod 확인")]),t._v("\nkubectl get pod --show-labels\n")])])]),s("p",[s("strong",[t._v("실행 결과")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NAME            READY   STATUS        RESTARTS   AGE     LABELS\necho-rs-h4q86   1/1     Running       0          4m      app=echo,tier=app\necho-rs-kv4mh   0/1     Terminating   0          2m19s   app=echo,tier=app\n")])])]),s("p",[s("code",[t._v("replicas")]),t._v("에 정의한 대로 Pod의 개수를 1로 유지하기 위해 기존 Pod을 제거합니다.")]),t._v(" "),s("p",[t._v("ReplicaSet이 어떻게 동작하는지 살펴봅니다.")]),t._v(" "),s("pre",{staticClass:"mermaid-container"},[s("code",[s("Mermaid",{attrs:{id:"mermaid_64a570a6",graph:t.$dataBlock.mermaid_64a570a6}})],1)]),s("ol",[s("li",[s("code",[t._v("ReplicaSet Controller")]),t._v("는 ReplicaSet조건을 감시하면서 현재 상태와 원하는 상태가 다른 것을 체크")]),t._v(" "),s("li",[s("code",[t._v("ReplicaSet Controller")]),t._v("가 원하는 상태가 되도록 "),s("code",[t._v("Pod")]),t._v("을 생성하거나 제거")]),t._v(" "),s("li",[s("code",[t._v("Scheduler")]),t._v("는 API서버를 감시하면서 할당되지 않은"),s("sup",[t._v("unassigned")]),t._v(" "),s("code",[t._v("Pod")]),t._v("이 있는지 체크")]),t._v(" "),s("li",[s("code",[t._v("Scheduler")]),t._v("는 할당되지 않은 새로운 "),s("code",[t._v("Pod")]),t._v("을 감지하고 적절한 "),s("code",[t._v("노드")]),s("sup",[t._v("node")]),t._v("에 배치")]),t._v(" "),s("li",[t._v("이후 노드는 기존대로 동작")])]),t._v(" "),s("p",[t._v("ReplicaSet은 ReplicaSet Controller가 관리하고 Pod의 할당은 여전히 Scheduler가 관리합니다. 각자 맡은 역할을 충실히 수행하는 모습이 보기 좋습니다.")]),t._v(" "),s("h2",{attrs:{id:"스케일-아웃"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스케일-아웃"}},[t._v("#")]),t._v(" 스케일 아웃")]),t._v(" "),s("p",[t._v("ReplicaSet을 이용하면 손쉽게 Pod을 여러개로 복제할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ReplicaSet\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rs\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" app\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" app\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ghcr.io/subicura/echo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1\n")])])]),s("code-link",{attrs:{link:"guide/replicaset/echo-rs-scaled.yml"}}),t._v(" "),s("p",[t._v("이전에 작성한 것과 차이점은 "),s("code",[t._v("replicas: 4")]),t._v(" 입니다. 바로 실행해봅니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("kubectl apply -f echo-rs-scaled.yml\n\n# Pod 확인\nkubectl get pod,rs\n")])])]),s("p",[s("strong",[t._v("실행 결과")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NAME                READY   STATUS    RESTARTS   AGE\npod/echo-rs-h4q86   1/1     Running   0          12m\npod/echo-rs-4wk6t   1/1     Running   0          2m12s\npod/echo-rs-nkgf2   1/1     Running   0          2m12s\npod/echo-rs-xpqnc   1/1     Running   0          2m12s\n\nNAME                      DESIRED   CURRENT   READY   AGE\nreplicaset.apps/echo-rs   4         4         4       12m\n")])])]),s("p",[t._v("기존에 생성된 Pod외에 3개가 추가되었습니다.")]),t._v(" "),s("h2",{attrs:{id:"마무리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#마무리"}},[t._v("#")]),t._v(" 마무리")]),t._v(" "),s("p",[t._v("ReplicaSet은 원하는 개수의 Pod을 유지하는 역할을 담당합니다. label을 이용하여 Pod을 체크하기 때문에 label이 겹치지 않게 신경써서 정의해야 합니다.")]),t._v(" "),s("p",[t._v("실전에서 ReplicaSet을 단독으로 쓰는 경우는 거의 없습니다. 바로 다음에서 배울 Deployment가 ReplicaSet을 이용하고 주로 Deployment를 사용합니다.")]),t._v(" "),s("h2",{attrs:{id:"참고"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#replicaset-v1-apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReplicaSet v1 apps"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"문제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#문제"}},[t._v("#")]),t._v(" 문제")]),t._v(" "),s("p",[s("strong",[t._v("문제1. 다음 조건을 만족하는 ReplicaSet을 만드세요.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("키")]),t._v(" "),s("th",[t._v("값")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("ReplicaSet 이름")])]),t._v(" "),s("td",[t._v("nginx")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("ReplicaSet selector")])]),t._v(" "),s("td",[t._v("app: nginx")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("ReplicaSet 복제수")])]),t._v(" "),s("td",[t._v("3")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Container 이름")])]),t._v(" "),s("td",[t._v("nginx")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Container 이미지")])]),t._v(" "),s("td",[t._v("nginx:latest")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("정답")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ReplicaSet\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n")])])]),s("code-link",{attrs:{link:"guide/replicaset/exam1.yml"}})],1)],1)}),[],!1,null,null,null);"function"==typeof n&&n(r);a.default=r.exports}}]);