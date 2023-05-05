(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    320: function (e, t, n) {},
    325: function (e, t, n) {
      'use strict';
      n.r(t);
      var i,
        a,
        c,
        o,
        s,
        l,
        r,
        d,
        p = n(18),
        u = n.n(p),
        j = n(55),
        b = n(26),
        m = n(359),
        g = n(4),
        h = Object(m.a)(function (e) {
          return {
            container: {
              backgroundColor: 'black',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '100%',
              height: '100vh',
              position: 'fixed',
              overflow: 'hidden',
            },
            img: { position: 'absolute', width: '100%', zIndex: -1 },
            link: {
              textDecoration: 'none',
              fontWeight: 700,
              color: 'white',
              fontSize: e.typography.pxToRem(50),
              width: '100%',
            },
            buttonContainer: { display: 'flex', justifyContent: 'space-around', textAlign: 'center' },
          };
        }),
        x = function () {
          var e = h();
          return Object(g.jsxs)('div', {
            className: e.container,
            children: [
              Object(g.jsxs)('div', {
                className: e.buttonContainer,
                children: [
                  Object(g.jsx)(j.b, { className: e.link, to: '/pizzas', children: 'Pizzas' }),
                  Object(g.jsx)(j.b, { className: e.link, to: '/toppings', children: 'Toppings' }),
                ],
              }),
              Object(g.jsx)('img', {
                alt: 'samurai-pizza-cats',
                className: e.img,
                src: 'https://img5.goodfon.com/original/2500x1280/e/f1/minimalizm-stil-fon-art-art-style-background-illustration--4.jpg',
              }),
            ],
          });
        },
        O = n(361),
        f = n(362),
        v = n(364),
        z = Object(m.a)(function (e) {
          return Object(O.a)({
            root: { backgroundColor: 'black', display: 'flex', justifyContent: 'space-between' },
            linkContainer: { display: 'flex', alignItems: 'center', padding: e.spacing(2, 0, 2) },
            link: {
              textDecoration: 'none',
              fontWeight: 700,
              color: 'white',
              fontSize: e.typography.pxToRem(20),
              padding: e.spacing(0, 2),
            },
            logo: { width: e.typography.pxToRem(50) },
            logoText: { fontFamily: 'Metal Mania' },
          });
        }),
        y = function () {
          var e = z();
          return '/' === Object(b.f)().pathname
            ? null
            : Object(g.jsx)(f.a, {
                position: 'static',
                children: Object(g.jsxs)(v.a, {
                  className: e.root,
                  children: [
                    Object(g.jsxs)('div', {
                      className: e.linkContainer,
                      children: [
                        Object(g.jsx)(j.b, {
                          className: e.link,
                          to: '/',
                          children: Object(g.jsx)('img', {
                            alt: 'samurai-pizza-cats',
                            className: e.logo,
                            src: 'https://i.pinimg.com/564x/34/50/56/345056b367f0934aa86b5e21dee6f1de.jpg',
                          }),
                        }),
                        Object(g.jsx)(j.b, {
                          className: e.link,
                          to: '/pizzas',
                          style: function (e) {
                            return { color: e ? 'green' : 'white' };
                          },
                          children: 'Pizzas',
                        }),
                        Object(g.jsx)(j.b, {
                          className: e.link,
                          to: '/toppings',
                          style: function (e) {
                            return { color: e ? 'green' : 'white' };
                          },
                          children: 'Toppings',
                        }),
                      ],
                    }),
                    Object(g.jsx)('h1', { className: e.logoText, children: 'SAMURAI PIZZA CATS' }),
                  ],
                }),
              });
        },
        C = n(11),
        w = n(0),
        N = n.n(w),
        S = n(386),
        k = n(332),
        I = n(374),
        T = n(367),
        P = n(371),
        B = n(29),
        D = n(383),
        A = Object(D.a)(
          i ||
            (i = Object(B.a)([
              '\n  query Toppings {\n    toppings {\n      id\n      name\n      priceCents\n    }\n  }\n',
            ]))
        ),
        F = Object(m.a)(function (e) {
          return {
            header: {
              display: 'flex',
              margin: e.spacing(2, 0, 2),
              fontSize: e.typography.pxToRem(24),
              textTransform: 'capitalize',
            },
          };
        }),
        $ = function (e) {
          var t = e.pageHeader,
            n = F();
          return Object(g.jsx)('div', { className: n.header, children: Object(g.jsx)('h1', { children: t }) });
        },
        R = n(6),
        U = n(369),
        W = n(370),
        M = n(385),
        V = n(366),
        L = n(329),
        E = n(180),
        H = n(381),
        Q = n(368),
        q = n(19),
        J = n(35),
        Z = n(365),
        G = Object(D.a)(
          a ||
            (a = Object(B.a)([
              '\n  mutation ($createToppingInput: CreateToppingInput!) {\n    createTopping(input: $createToppingInput) {\n      name\n      priceCents\n    }\n  }\n',
            ]))
        ),
        K = Object(D.a)(
          c ||
            (c = Object(B.a)([
              '\n  mutation ($deleteToppingInput: DeleteToppingInput!) {\n    deleteTopping(input: $deleteToppingInput)\n  }\n',
            ]))
        ),
        X = Object(D.a)(
          o ||
            (o = Object(B.a)([
              '\n  mutation ($updateToppingInput: UpdateToppingInput!) {\n    updateTopping(input: $updateToppingInput) {\n      id\n      name\n      priceCents\n    }\n  }\n',
            ]))
        ),
        Y = function () {
          var e = Object(Z.a)(G, { refetchQueries: [A, 'Toppings'] }),
            t = Object(C.a)(e, 1)[0],
            n = Object(Z.a)(K, { refetchQueries: [A, 'Toppings'] }),
            i = Object(C.a)(n, 1)[0],
            a = Object(Z.a)(X),
            c = Object(C.a)(a, 1)[0],
            o = Object(w.useCallback)(
              function (e) {
                try {
                  t({ variables: { createToppingInput: { name: e.name, priceCents: e.priceCents } } });
                } catch (n) {
                  console.log(n);
                }
              },
              [t]
            ),
            s = Object(w.useCallback)(
              (function () {
                var e = Object(J.a)(
                  Object(q.a)().mark(function e(t) {
                    return Object(q.a)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), i({ variables: { deleteToppingInput: { id: t.id } } });
                            case 3:
                              e.next = 8;
                              break;
                            case 5:
                              (e.prev = 5), (e.t0 = e.catch(0)), console.log(e.t0);
                            case 8:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 5]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [i]
            );
          return {
            onCreateTopping: o,
            onDeleteTopping: s,
            onUpdateTopping: Object(w.useCallback)(
              function (e) {
                try {
                  c({
                    variables: {
                      updateToppingInput: {
                        id: e.id,
                        name: null === e || void 0 === e ? void 0 : e.name,
                        priceCents: null === e || void 0 === e ? void 0 : e.priceCents,
                      },
                    },
                  });
                } catch (t) {
                  console.log(t);
                }
              },
              [c]
            ),
          };
        },
        _ = Object(m.a)(function (e) {
          return Object(O.a)({
            modal: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
            paper: {
              backgroundColor: e.palette.background.paper,
              boxShadow: e.shadows[5],
              padding: e.spacing(2, 4, 3),
            },
            root: { '& .MuiTextField-root': { margin: e.spacing(1), width: '25ch' } },
          });
        }),
        ee = function (e) {
          var t = e.selectedTopping,
            n = e.setSelectedTopping,
            i = e.open,
            a = e.setOpen,
            c = _(),
            o = Y(),
            s = o.onCreateTopping,
            l = o.onDeleteTopping,
            r = o.onUpdateTopping;
          return Object(g.jsx)(M.a, {
            'aria-labelledby': 'transition-modal-title',
            'aria-describedby': 'transition-modal-description',
            className: c.modal,
            open: i,
            onClose: function () {
              return a(!1);
            },
            closeAfterTransition: !0,
            BackdropComponent: V.a,
            BackdropProps: { timeout: 500 },
            children: Object(g.jsx)(L.a, {
              in: i,
              children: Object(g.jsxs)(E.a, {
                className: c.paper,
                children: [
                  Object(g.jsxs)('h2', { children: [t ? 'Edit' : 'Add', ' Topping'] }),
                  Object(g.jsxs)('form', {
                    className: c.root,
                    noValidate: !0,
                    autoComplete: 'off',
                    children: [
                      Object(g.jsx)(H.a, {
                        id: 'name-input',
                        label: 'Topping Name',
                        defaultValue: null === t || void 0 === t ? void 0 : t.name,
                        onChange: function (e) {
                          return n(Object(R.a)(Object(R.a)({}, t), {}, { name: e.target.value }));
                        },
                      }),
                      Object(g.jsx)(H.a, {
                        id: 'price-input',
                        label: 'Topping Price in Cents',
                        type: 'number',
                        defaultValue: null === t || void 0 === t ? void 0 : t.priceCents,
                        onChange: function (e) {
                          return n(Object(R.a)(Object(R.a)({}, t), {}, { priceCents: parseInt(e.target.value) }));
                        },
                      }),
                      Object(g.jsx)(Q.a, {
                        edge: 'end',
                        'aria-label': 'update',
                        type: 'button',
                        onClick: function () {
                          null !== t && void 0 !== t && t.id ? r(t) : s(t), a(!1);
                        },
                        children: Object(g.jsx)(U.a, {}),
                      }),
                      Object(g.jsx)(Q.a, {
                        edge: 'end',
                        'aria-label': 'delete',
                        type: 'button',
                        onClick: function () {
                          l(t), a(!1);
                        },
                        children: Object(g.jsx)(W.a, {}),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        te = n(5),
        ne = n(372),
        ie = function (e) {
          return (e / 100).toLocaleString('en-US', { style: 'currency', currency: 'CAD' });
        },
        ae = ['topping', 'handleOpen'],
        ce = Object(k.a)(function (e) {
          return {
            container: { display: 'flex' },
            name: { minWidth: e.typography.pxToRem(500) },
            right: { display: 'flex', width: '100%', justifyContent: 'space-between' },
          };
        }),
        oe = function (e) {
          var t,
            n = e.topping,
            i = e.handleOpen,
            a = Object(te.a)(e, ae),
            c = ce();
          return Object(g.jsxs)(
            P.a,
            Object(R.a)(
              Object(R.a)({}, a),
              {},
              {
                className: c.container,
                children: [
                  Object(g.jsx)('p', {
                    'data-testid': 'topping-name-'.concat(null === n || void 0 === n ? void 0 : n.id),
                    className: c.name,
                    children:
                      null !== (t = null === n || void 0 === n ? void 0 : n.name) && void 0 !== t ? t : 'Add topping',
                  }),
                  Object(g.jsxs)('div', {
                    className: c.right,
                    children: [
                      Object(g.jsx)('p', {
                        'data-testid': 'topping-price-'.concat(null === n || void 0 === n ? void 0 : n.id),
                        children: null !== n && void 0 !== n && n.priceCents ? ie(n.priceCents) : '',
                      }),
                      Object(g.jsx)(Q.a, {
                        edge: 'end',
                        'aria-label': 'modify',
                        type: 'button',
                        onClick: function () {
                          return i(n);
                        },
                        children: n ? Object(g.jsx)(ne.a, {}) : Object(g.jsx)(U.a, {}),
                      }),
                    ],
                  }),
                ],
              }
            )
          );
        },
        se = Object(k.a)(function (e) {
          var t = e.typography;
          return Object(O.a)({
            container: { minWidth: t.pxToRem(650) },
            skeleton: { display: 'flex', justifyContent: 'center', verticalAlign: 'center' },
            header: { display: 'flex' },
            name: { minWidth: t.pxToRem(500) },
            right: { display: 'flex', width: '100%', justifyContent: 'space-between' },
          });
        }),
        le = function () {
          var e = se(),
            t = N.a.useState(!1),
            n = Object(C.a)(t, 2),
            i = n[0],
            a = n[1],
            c = N.a.useState(),
            o = Object(C.a)(c, 2),
            s = o[0],
            l = o[1],
            r = Object(S.a)(A),
            d = r.loading,
            p = r.data,
            u = function (e) {
              l(e), a(!0);
            };
          if (d) return Object(g.jsx)('div', { className: e.skeleton, children: 'Loading ...' });
          var j =
            null === p || void 0 === p
              ? void 0
              : p.toppings.map(function (e) {
                  return Object(g.jsx)(
                    oe,
                    {
                      'data-testid': 'topping-item-'.concat(null === e || void 0 === e ? void 0 : e.id),
                      handleOpen: u,
                      topping: e,
                    },
                    e.id
                  );
                });
          return Object(g.jsxs)(I.a, {
            maxWidth: 'md',
            children: [
              Object(g.jsx)($, { pageHeader: 'Toppings' }),
              Object(g.jsxs)(T.a, {
                className: e.container,
                children: [
                  Object(g.jsxs)(P.a, {
                    className: e.header,
                    children: [
                      Object(g.jsx)('h2', { className: e.name, children: 'Topping' }),
                      Object(g.jsxs)('div', {
                        className: e.right,
                        children: [
                          Object(g.jsx)('h2', { children: 'Price' }),
                          Object(g.jsx)('h2', { children: 'Modify' }),
                        ],
                      }),
                    ],
                  }),
                  Object(g.jsx)(oe, { handleOpen: u }, 'add-topping'),
                  j,
                ],
              }),
              Object(g.jsx)(ee, { selectedTopping: s, setSelectedTopping: l, open: i, setOpen: a }),
            ],
          });
        },
        re = n(382),
        de = n(375),
        pe = n(376),
        ue = n(327),
        je = n.p + 'static/media/make-pizza.591c7146.jpeg',
        be = n.p + 'static/media/default-pizza.c3e5cb5c.jpeg',
        me = ['pizza', 'handleOpen'],
        ge = Object(k.a)(function () {
          return Object(ue.a)({
            ListContainer: { display: 'flex', width: '25%', justifyContent: 'center', margin: '2vw' },
            card: { display: 'flex', width: '25vw', height: '65vh', flexDirection: 'column', backgroundColor: 'white' },
            imgBox: {
              textAlign: 'right',
              width: '95%',
              height: '90%',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '10px',
            },
            pizzaInfoBox: {
              height: '30%',
              width: '90%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            },
            pizzaName: { fontSize: '1.5vw', fontWeight: 'bold' },
            pizzaDes: { fontSize: '1vw' },
            pizzaPrice: { fontSize: '1.2vw' },
            newPizzaBox: {
              backgroundColor: 'black',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
              color: 'white',
            },
            newPizzaImg: { width: '90%' },
            addIcon: { fontSize: '3vw', color: 'white', transition: '0.3s', '&:hover': { color: 'grey' } },
            fixIcon: {
              fontSize: '3vw',
              color: 'black',
              position: 'relative',
              cursor: 'pointer',
              transition: '0.3s',
              '&:hover': { color: 'grey' },
            },
          });
        }),
        he = function (e) {
          var t,
            n = e.pizza,
            i = e.handleOpen,
            a = Object(te.a)(e, me),
            c = ge();
          return Object(g.jsx)(re.a, {
            className: c.ListContainer,
            children: Object(g.jsx)(de.a, {
              children: Object(g.jsx)(
                pe.a,
                Object(R.a)(
                  Object(R.a)({ style: { padding: '0', width: '100%', height: '100%' } }, a),
                  {},
                  {
                    children: n
                      ? Object(g.jsxs)('div', {
                          className: c.card,
                          children: [
                            Object(g.jsx)('button', {
                              className: c.imgBox,
                              type: 'button',
                              onClick: function () {
                                return i(n);
                              },
                              style: {
                                backgroundImage: 'url('.concat(
                                  null !== (t = n.imgSrc) && void 0 !== t && t.includes('https')
                                    ? null === n || void 0 === n
                                      ? void 0
                                      : n.imgSrc
                                    : be,
                                  ')'
                                ),
                                backgroundSize: '100% 100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                              },
                              'data-testid': 'pizza-imgSrc-'.concat(null === n || void 0 === n ? void 0 : n.id),
                            }),
                            Object(g.jsxs)('div', {
                              className: c.pizzaInfoBox,
                              children: [
                                Object(g.jsx)('p', {
                                  'data-testid': 'pizza-name-'.concat(null === n || void 0 === n ? void 0 : n.id),
                                  className: c.pizzaName,
                                  children: null === n || void 0 === n ? void 0 : n.name,
                                }),
                                Object(g.jsx)('p', {
                                  'data-testid': 'pizza-description-'.concat(
                                    null === n || void 0 === n ? void 0 : n.id
                                  ),
                                  className: c.pizzaDes,
                                  children: null !== n && void 0 !== n && n.description ? n.description : '',
                                }),
                                Object(g.jsx)('p', {
                                  'data-testid': 'pizza-priceCents-'.concat(null === n || void 0 === n ? void 0 : n.id),
                                  className: c.pizzaPrice,
                                  children: null !== n && void 0 !== n && n.priceCents ? ie(n.priceCents) : '',
                                }),
                              ],
                            }),
                          ],
                        })
                      : Object(g.jsx)('div', {
                          className: c.card,
                          children: Object(g.jsxs)('div', {
                            className: c.newPizzaBox,
                            children: [
                              Object(g.jsx)('h2', {
                                style: { fontSize: '2vw', textAlign: 'center', marginTop: '1vw' },
                                children: 'Make New Pizza',
                              }),
                              Object(g.jsx)('img', { className: c.newPizzaImg, src: je }),
                              Object(g.jsx)(Q.a, {
                                className: c.addIcon,
                                edge: 'end',
                                'aria-label': 'create',
                                type: 'button',
                                onClick: function () {
                                  return i(n);
                                },
                                children: Object(g.jsx)(U.a, { fontSize: 'inherit' }),
                              }),
                            ],
                          }),
                        }),
                  }
                )
              ),
            }),
          });
        },
        xe = Object(D.a)(
          s ||
            (s = Object(B.a)([
              '\n  query getPizzas($input: CursorResultsInput!) {\n    pizzas(input: $input) {\n      results {\n        id\n        imgSrc\n        name\n        toppingIds\n        toppings {\n          id\n          name\n        }\n        priceCents\n      }\n      totalCount\n      hasNextPage\n      cursor\n    }\n  }\n',
            ]))
        ),
        Oe = n(176),
        fe = n(175),
        ve = n(66),
        ze = Object(D.a)(
          l ||
            (l = Object(B.a)([
              '\n  mutation ($createPizzaInput: CreatePizzaInput!) {\n    createPizza(input: $createPizzaInput) {\n      id\n      name\n      description\n      imgSrc\n      toppings {\n        id\n        name\n        priceCents\n      }\n    }\n  }\n',
            ]))
        ),
        ye = Object(D.a)(
          r ||
            (r = Object(B.a)([
              '\n  mutation ($deletePizzaInput: DeletePizzaInput!) {\n    deletePizza(input: $deletePizzaInput)\n  }\n',
            ]))
        ),
        Ce = Object(D.a)(
          d ||
            (d = Object(B.a)([
              '\n  mutation ($updatePizzaInput: UpdatePizzaInput!) {\n    updatePizza(input: $updatePizzaInput) {\n      id\n      name\n      description\n      imgSrc\n      toppings {\n        id\n        name\n        priceCents\n      }\n    }\n  }\n',
            ]))
        ),
        we = function () {
          var e = Object(Z.a)(ze, { refetchQueries: [xe, 'Pizzas'] }),
            t = Object(C.a)(e, 1)[0],
            n = Object(Z.a)(ye, { refetchQueries: [xe, 'Pizzas'] }),
            i = Object(C.a)(n, 1)[0],
            a = Object(Z.a)(Ce),
            c = Object(C.a)(a, 1)[0],
            o = Object(w.useCallback)(
              function (e) {
                try {
                  t({
                    variables: {
                      createPizzaInput: {
                        name: null === e || void 0 === e ? void 0 : e.name,
                        description: null === e || void 0 === e ? void 0 : e.description,
                        toppingIds: null === e || void 0 === e ? void 0 : e.toppingIds,
                        imgSrc: null === e || void 0 === e ? void 0 : e.imgSrc,
                      },
                    },
                  });
                } catch (n) {
                  console.log(n);
                }
              },
              [t]
            ),
            s = Object(w.useCallback)(
              (function () {
                var e = Object(J.a)(
                  Object(q.a)().mark(function e(t) {
                    return Object(q.a)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), i({ variables: { deletePizzaInput: { id: t.id } } });
                            case 3:
                              e.next = 8;
                              break;
                            case 5:
                              (e.prev = 5), (e.t0 = e.catch(0)), console.log(e.t0);
                            case 8:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 5]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [i]
            );
          return {
            onCreatePizza: o,
            onDeletePizza: s,
            onUpdatePizza: Object(w.useCallback)(
              function (e) {
                try {
                  c({
                    variables: {
                      updatePizzaInput: {
                        id: e.id,
                        name: null === e || void 0 === e ? void 0 : e.name,
                        description: null === e || void 0 === e ? void 0 : e.description,
                        toppingIds: null === e || void 0 === e ? void 0 : e.toppingIds,
                        imgSrc: null === e || void 0 === e ? void 0 : e.imgSrc,
                      },
                    },
                  });
                } catch (t) {
                  console.log(t);
                }
              },
              [c]
            ),
          };
        },
        Ne = Object(m.a)(function (e) {
          return Object(O.a)({
            modal: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
            skeleton: { display: 'flex', justifyContent: 'center', verticalAlign: 'center' },
            paper: {
              backgroundColor: e.palette.background.paper,
              boxShadow: e.shadows[5],
              padding: e.spacing(1, 3, 1),
            },
            root: { '& .MuiTextField-root': { margin: e.spacing(1), width: '25ch' } },
            form: { display: 'flex', flexDirection: 'column', margin: '10px', maxWidth: '30vw', maxHight: '5vh' },
            h1: { fontSize: '2vw', textAlign: 'center' },
            h2: { fontSize: '1.5vw' },
            pizzaImg: { width: '25vw', margin: '10px' },
            pizzaImgDefault: { width: '25vw', margin: '10px' },
            buttonBox: { textAlign: 'center' },
            button: {
              border: 'none',
              outline: 'none',
              backgroundColor: 'inherit',
              fontSize: '1.3vw',
              fontWeight: 'bold',
              padding: '1.5vw 1vw 0 1vw',
              cursor: 'pointer',
            },
            textBox: { display: 'flex' },
            textField: { flex: '2', fontSize: '1vw', '&:focus': { border: 'pink solid 2px' } },
            labelBox: { flex: '1', fontSize: '1vw' },
            selectTopping: { width: '100%', height: '10%', border: 'none' },
          });
        }),
        Se = function (e) {
          var t = e.selectedPizza,
            n = (e.setSelectedPizza, e.open),
            i = e.setOpen,
            a = Ne(),
            c = we(),
            o = c.onCreatePizza,
            s = c.onDeletePizza,
            l = c.onUpdatePizza,
            r = Object(S.a)(A),
            d = r.loading,
            p = r.data,
            u = Object(w.useState)([]),
            j = Object(C.a)(u, 2),
            b = (j[0], j[1]),
            m = ve.b({
              name: ve.c(),
              description: ve.c(),
              imgSrc: ve.c(),
              toppingIds: ve.a().of(ve.b().shape({ id: ve.c() })),
            }),
            h = Object(fe.a)({
              initialValues: {
                id: null === t || void 0 === t ? void 0 : t.id,
                name: null === t || void 0 === t ? void 0 : t.name,
                description: null === t || void 0 === t ? void 0 : t.description,
                imgSrc: null === t || void 0 === t ? void 0 : t.imgSrc,
                toppingIds:
                  null !== t && void 0 !== t && t.toppings ? (null === t || void 0 === t ? void 0 : t.toppings) : [],
              },
              validationSchema: m,
              onSubmit: function (e) {
                var n = e.toppingIds.map(function (e) {
                  return e.id;
                });
                if ((console.log(e), t)) {
                  var a = { id: t.id, name: e.name, description: e.description, imgSrc: e.imgSrc, toppingIds: n };
                  l(a);
                } else {
                  var c = { name: e.name, description: e.description, imgSrc: e.imgSrc, toppingIds: n };
                  o(c);
                }
                i(!1);
              },
            });
          if (d) return Object(g.jsx)('div', { children: 'Loading ...' });
          var x = [];
          null === p ||
            void 0 === p ||
            p.toppings.forEach(function (e) {
              x.push({ id: e.id, value: e.name, label: e.name });
            });
          var O = [];
          return (
            null === t ||
              void 0 === t ||
              t.toppings.forEach(function (e) {
                O.push({ id: e.id, value: e.name, label: e.name });
              }),
            Object(g.jsx)(M.a, {
              'aria-labelledby': 'transition-modal-title',
              'aria-describedby': 'transition-modal-description',
              className: a.modal,
              open: n,
              onClose: function () {
                return i(!1);
              },
              closeAfterTransition: !0,
              BackdropComponent: V.a,
              BackdropProps: { timeout: 500 },
              children: Object(g.jsx)(L.a, {
                in: n,
                children: Object(g.jsxs)(E.a, {
                  className: a.paper,
                  children: [
                    t
                      ? Object(g.jsxs)(g.Fragment, {
                          children: [
                            Object(g.jsx)('h1', { className: a.h1, id: 'name', children: t.name }),
                            Object(g.jsx)('img', {
                              id: 'imgSrc',
                              className: a.pizzaImg,
                              src: t.imgSrc.includes('https') ? t.imgSrc : be,
                            }),
                          ],
                        })
                      : Object(g.jsx)(g.Fragment, {
                          children: Object(g.jsx)('img', {
                            id: 'imgSrc',
                            src: je,
                            alt: 'defaultPizza',
                            className: a.pizzaImgDefault,
                          }),
                        }),
                    Object(g.jsxs)('form', {
                      onSubmit: h.handleSubmit,
                      noValidate: !0,
                      autoComplete: 'off',
                      className: a.form,
                      children: [
                        Object(g.jsx)('h2', { className: a.h2, children: 'Detail' }),
                        Object(g.jsxs)('div', {
                          className: a.textBox,
                          children: [
                            Object(g.jsx)('div', {
                              className: a.labelBox,
                              children: Object(g.jsx)('label', { children: 'Name: ' }),
                            }),
                            Object(g.jsx)(H.a, {
                              id: 'name',
                              className: a.textField,
                              defaultValue: null !== t && void 0 !== t && t.name ? t.name : 'New pizza',
                              onChange: h.handleChange,
                              InputProps: { classes: { input: a.textField }, disableUnderline: !0 },
                            }),
                          ],
                        }),
                        Object(g.jsxs)('div', {
                          className: a.textBox,
                          children: [
                            Object(g.jsx)('div', {
                              className: a.labelBox,
                              children: Object(g.jsx)('label', { children: 'Description: ' }),
                            }),
                            Object(g.jsx)(H.a, {
                              id: 'description',
                              className: a.textField,
                              type: 'text',
                              defaultValue: null !== t && void 0 !== t && t.description ? t.description : 'description',
                              onChange: h.handleChange,
                              InputProps: { classes: { input: a.textField }, disableUnderline: !0 },
                            }),
                          ],
                        }),
                        Object(g.jsxs)('div', {
                          className: a.textBox,
                          children: [
                            Object(g.jsx)('div', {
                              className: a.labelBox,
                              children: Object(g.jsx)('label', { children: 'Image URL: ' }),
                            }),
                            Object(g.jsx)(H.a, {
                              id: 'imgSrc',
                              className: a.textField,
                              type: 'text',
                              defaultValue: null !== t && void 0 !== t && t.imgSrc ? t.imgSrc : 'defaultPizza',
                              onChange: h.handleChange,
                              InputProps: { classes: { input: a.textField }, disableUnderline: !0 },
                            }),
                          ],
                        }),
                        Object(g.jsx)('h2', { className: a.h2, children: 'Toppings' }),
                        Object(g.jsx)(Oe.a, {
                          className: a.selectTopping,
                          options: x,
                          isMulti: !0,
                          defaultValue: O.map(function (e) {
                            return e;
                          }),
                          styles: {
                            control: function (e, t) {
                              return Object(R.a)(
                                Object(R.a)({}, e),
                                {},
                                {
                                  borderColor: t.isFocused ? 'red' : '',
                                  borderRadius: '0',
                                  border: 'none',
                                  borderBottom: 'black solid 1px',
                                }
                              );
                            },
                          },
                          closeMenuOnSelect: !1,
                          onChange: function (e) {
                            var t = e.map(function (e) {
                              return e.id.toString();
                            });
                            b(t.id), (h.values.toppingIds = e);
                          },
                        }),
                        t
                          ? Object(g.jsxs)('div', {
                              className: a.buttonBox,
                              children: [
                                Object(g.jsx)('button', {
                                  className: a.button,
                                  'aria-label': 'update',
                                  onClick: function () {
                                    l(t);
                                  },
                                  type: 'submit',
                                  children: 'Submit',
                                }),
                                Object(g.jsx)('button', {
                                  className: a.button,
                                  'aria-label': 'delete',
                                  onClick: function () {
                                    s(t), i(!1);
                                  },
                                  type: 'submit',
                                  children: 'Delete',
                                }),
                              ],
                            })
                          : Object(g.jsx)('div', {
                              className: a.buttonBox,
                              children: Object(g.jsx)('button', {
                                className: a.button,
                                'aria-label': 'create',
                                onClick: function () {
                                  o(t);
                                },
                                type: 'submit',
                                children: 'Submit',
                              }),
                            }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        ke = Object(k.a)(function (e) {
          e.typography;
          return Object(O.a)({
            container: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap' },
            skeleton: { display: 'flex', justifyContent: 'center', verticalAlign: 'center' },
            button: {
              backgroundColor: 'white',
              fontSize: '24px',
              border: 'none',
              cursor: 'pointer',
              padding: '2vw',
              outline: 'none',
              margin: 'auto',
              display: 'block',
            },
          });
        }),
        Ie = function () {
          var e = ke(),
            t = Object(w.useState)(!1),
            n = Object(C.a)(t, 2),
            i = n[0],
            a = n[1],
            c = N.a.useState(),
            o = Object(C.a)(c, 2),
            s = o[0],
            l = o[1],
            r = Object(w.useState)(5),
            d = Object(C.a)(r, 2),
            p = d[0],
            u = d[1],
            j = Object(S.a)(xe, { variables: { input: { limit: p, cursor: 'empty' } } }),
            b = j.loading,
            m = (j.error, j.data),
            h = Object(w.useCallback)(
              function (e) {
                return u(function (e) {
                  return e + 3;
                });
              },
              [p]
            );
          if (b)
            return Object(g.jsx)('div', {
              'data-testid': 'pizza-list-loading',
              className: e.skeleton,
              children: 'Pizza List Loading ...',
            });
          var x = function (e) {
              l(e), a(!0);
            },
            O =
              null === m || void 0 === m
                ? void 0
                : m.pizzas.results.map(function (e) {
                    return Object(g.jsx)(
                      he,
                      {
                        'data-testid': 'pizza-item'.concat(null === e || void 0 === e ? void 0 : e.id),
                        handleOpen: x,
                        pizza: e,
                      },
                      null === e || void 0 === e ? void 0 : e.id
                    );
                  });
          return Object(g.jsxs)(I.a, {
            maxWidth: 'xl',
            children: [
              Object(g.jsx)('div', { 'data-testid': 'pizza-item-list' }),
              Object(g.jsxs)('div', {
                className: e.container,
                children: [Object(g.jsx)(he, { handleOpen: x }, 'add-pizza'), O],
              }),
              Object(g.jsx)('button', { className: e.button, onClick: h, children: 'See more pizzas' }),
              Object(g.jsx)(Se, { selectedPizza: s, setSelectedPizza: l, open: i, setOpen: a }),
            ],
          });
        },
        Te = function () {
          return Object(g.jsxs)(I.a, {
            maxWidth: 'xl',
            style: { display: 'flex', flexDirection: 'column' },
            children: [Object(g.jsx)($, { pageHeader: 'Pizzas' }), Object(g.jsx)(Ie, {})],
          });
        },
        Pe = function () {
          return Object(g.jsxs)(j.a, {
            children: [
              Object(g.jsx)(y, {}),
              Object(g.jsxs)(b.c, {
                children: [
                  Object(g.jsx)(b.a, { path: '/pizzas', component: Te, exact: !0 }),
                  '\xdf',
                  Object(g.jsx)(b.a, { path: '/toppings', component: le, exact: !0 }),
                  Object(g.jsx)(b.a, { path: '/', component: x, exact: !0 }),
                ],
              }),
            ],
          });
        },
        Be = n(384),
        De = n(378),
        Ae = n(380),
        Fe = n(379),
        $e = (n(320), n(177)),
        Re = Object($e.a)({
          typography: { fontFamily: 'Poppins, Roboto, sans-serif' },
          overrides: { MuiButton: { root: { fontFamily: 'Poppins, sans-serif', textTransform: 'none' } } },
        }),
        Ue = { uri: 'http://ec2-18-116-164-51.us-east-2.compute.amazonaws.com/graphql', cache: new Be.a({}) },
        We = function (e) {
          var t = e.clientOptions,
            n = void 0 === t ? {} : t,
            i = e.children;
          return Object(g.jsx)(N.a.StrictMode, {
            children: Object(g.jsx)(De.a, {
              client: new Ae.a(Object(R.a)(Object(R.a)({}, Ue), n)),
              children: Object(g.jsx)(Fe.a, { theme: Re, children: i }),
            }),
          });
        };
      n(321).config(),
        u.a.render(Object(g.jsx)(We, { children: Object(g.jsx)(Pe, {}) }), document.getElementById('root'));
    },
  },
  [[325, 1, 2]],
]);
//# sourceMappingURL=main.a457ff93.chunk.js.map
