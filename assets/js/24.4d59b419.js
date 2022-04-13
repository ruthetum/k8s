(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{458:function(e,t,r){"use strict";r.r(t);var n=r(17),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"쿠버네티스-도커-지원-중단"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#쿠버네티스-도커-지원-중단"}},[e._v("#")]),e._v(" 쿠버네티스, 도커 지원 중단")]),e._v(" "),r("blog-title-info",{attrs:{page:e.$page}}),e._v(" "),r("p",[e._v("쿠버네티스에서 도커 지원을 중단한다고 발표했습니다.")]),e._v(" "),r("blockquote",[r("p",[e._v("Kubernetes is deprecating Docker as a container runtime after v1.20.")])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("한줄 요약")]),e._v(" "),r("p",[e._v("직접 쿠버네티스 클러스터를 설치하고 관리하지 않는다면 문제 없습니다.")])]),e._v(" "),r("h2",{attrs:{id:"컨테이너-런타임"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너-런타임"}},[e._v("#")]),e._v(" 컨테이너 런타임")]),e._v(" "),r("p",[r("strong",[e._v("컨테이너=도커")]),e._v("라고 생각할 정도로 도커의 인기가 압도적이지만, 도커 외에 "),r("a",{attrs:{href:"https://containerd.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("containerd"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://cri-o.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CRI-O"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://katacontainers.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kata Containers"),r("OutboundLink")],1),e._v("를 이용하여 컨테이너를 관리할 수 있습니다. 컨테이너를 관리하는 프로그램을 보통 "),r("a",{attrs:{href:"https://kubernetes.io/ko/docs/setup/production-environment/container-runtimes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("컨테이너 런타임"),r("OutboundLink")],1),e._v("이라고 합니다.")]),e._v(" "),r("p",[e._v("도커를 빌드했을 때 결과물인 이미지는 "),r("a",{attrs:{href:"https://opencontainers.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OCI(Open container initiative)"),r("OutboundLink")],1),e._v("라는 표준을 따르기 표준 포맷을 지원하는 다른 런타임도 사용할 수 있습니다. 사실 containerd는 도커에 포함된 컨테이너 런타임으로 도커와 완전히 다른 프로그램이 아니라 도커를 사용한다면 containerd를 사용하는 것입니다.")]),e._v(" "),r("p",[e._v("도커는 올인원 패키지로 하는 일이 많습니다.")]),e._v(" "),r("ul",[r("li",[e._v("CLI")]),e._v(" "),r("li",[e._v("API")]),e._v(" "),r("li",[e._v("Server (Docker engine)")]),e._v(" "),r("li",[e._v("Container Runtime (containerd)")]),e._v(" "),r("li",[e._v("Volume")]),e._v(" "),r("li",[e._v("Network")]),e._v(" "),r("li",[e._v("Build")])]),e._v(" "),r("p",[e._v("저 기능 중에 쿠버네티스가 사용하는 부분은 "),r("strong",[e._v("Container Runtime")]),e._v(" 뿐입니다.")]),e._v(" "),r("ul",[r("li",[r("s",[e._v("CLI, API")]),e._v(" → Kubernete CLI")]),e._v(" "),r("li",[r("s",[e._v("Volume")]),e._v(" → Kubernetes Volume")]),e._v(" "),r("li",[r("s",[e._v("Network")]),e._v(" → Kubernetes Network")]),e._v(" "),r("li",[r("strong",[e._v("Build")]),e._v(" - 여전히 도커를 많이 사용할 것으로 예상")])]),e._v(" "),r("h3",{attrs:{id:"cri"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cri"}},[e._v("#")]),e._v(" CRI")]),e._v(" "),r("p",[e._v("쿠버네티스는 CRI(container runtime interface)라는 것을 이용하여 컨테이너 런타임과 통신하는데 도커는 해당 인터페이스를 지원하지 않아 Dockershim이라는 추가 레이어를 통해 연동하였습니다. 이번 발표는 Dockershim이 deprecated 된다는 내용입니다. 추가적인 레이어를 제거하고 직접적으로 CRI를 사용하면 관리가 더 깔끔하겠죠?")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/imgs/archive/2020-12-19-deprecate-docker/dockershim.jpg"),alt:"기존 도커 방식"}}),e._v(" "),r("p",[e._v("Dockershim이 deprecated되면 CRI를 지원하는 containderd 또는 CRI-O를 사용하면 됩니다. containerd는 사실상 도커이기 때문에 기존 쿠버네티스 사용자는 전혀 차이가 없고 추가로 취할 조치도 없습니다.")]),e._v(" "),r("blockquote",[r("p",[e._v("You do not need to panic. It’s not as dramatic as it sounds.")])]),e._v(" "),r("h3",{attrs:{id:"조치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#조치"}},[e._v("#")]),e._v(" 조치")]),e._v(" "),r("p",[e._v("쿠버네티스 클러스터를 자체 구축한 경우엔 조치가 필요합니다.")]),e._v(" "),r("ul",[r("li",[e._v("쿠버네티스 사용자 - 평소처럼 YAML 만들고 배포하세요")]),e._v(" "),r("li",[e._v("클라우드 쿠버네티스 서비스 관리자 - 컨테이나 런타임 설치를 클라우드에서 관리하기 때문에 버전 업데이트하면 자동으로 바뀝니다.")]),e._v(" "),r("li",[e._v("자체구축 쿠버네티스 서비스 관리자 - "),r("strong",[e._v("컨테이너 런타임 변경")]),e._v(" 또는 "),r("strong",[e._v("Dockershim 설치")])])]),e._v(" "),r("p",[e._v("Dockershim은 2021년 말에 최종 deprecated 될 예정이지만, "),r("a",{attrs:{href:"https://www.mirantis.com/blog/mirantis-to-take-over-support-of-kubernetes-dockershim-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mirantis에서 지원"),r("OutboundLink")],1),e._v("할 예정입니다.")]),e._v(" "),r("h3",{attrs:{id:"도커-안쓰나요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#도커-안쓰나요"}},[e._v("#")]),e._v(" 도커 안쓰나요?")]),e._v(" "),r("p",[e._v("도커는 여전히 개발용, 이미지 빌드 역할로 많이 사용될 것입니다.")]),e._v(" "),r("h2",{attrs:{id:"참고"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[e._v("#")]),e._v(" 참고")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Don't Panic: Kubernetes and Docker"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.slideshare.net/JoHoon1/the-myths-of-deprecating-docker-in-kubernetes",target:"_blank",rel:"noopener noreferrer"}},[e._v("The myths of deprecating docker in kubernetes"),r("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);