(function() {var type_impls = {
"async_graphql":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UnsafeFutureObj%3C'a,+T%3E-for-%26mut+dyn+Future%3COutput+=+T%3E+%2B+Unpin\" class=\"impl\"><a class=\"src rightside\" href=\"src/futures_task/future_obj.rs.html#187\">source</a><a href=\"#impl-UnsafeFutureObj%3C'a,+T%3E-for-%26mut+dyn+Future%3COutput+=+T%3E+%2B+Unpin\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; <a class=\"trait\" href=\"futures_task/future_obj/trait.UnsafeFutureObj.html\" title=\"trait futures_task::future_obj::UnsafeFutureObj\">UnsafeFutureObj</a>&lt;'a, T&gt; for &amp;'a mut (dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>)</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_raw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_task/future_obj.rs.html#188\">source</a><a href=\"#method.into_raw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"futures_task/future_obj/trait.UnsafeFutureObj.html#tymethod.into_raw\" class=\"fn\">into_raw</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.pointer.html\">*mut </a>dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = T&gt; + 'a</h4></section></summary><div class='docblock'>Convert an owned instance into a (conceptually owned) fat pointer. <a href=\"futures_task/future_obj/trait.UnsafeFutureObj.html#tymethod.into_raw\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/futures_task/future_obj.rs.html#192\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"futures_task/future_obj/trait.UnsafeFutureObj.html#tymethod.drop\" class=\"fn\">drop</a>(_ptr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.pointer.html\">*mut </a>dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = T&gt; + 'a)</h4></section></summary><div class='docblock'>Drops the future represented by the given fat pointer. <a href=\"futures_task/future_obj/trait.UnsafeFutureObj.html#tymethod.drop\">Read more</a></div></details></div></details>","UnsafeFutureObj<'a, T>","async_graphql::extensions::ResolveFut"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()