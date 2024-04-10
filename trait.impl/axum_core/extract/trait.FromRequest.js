(function() {var implementors = {
"async_graphql_axum":[["impl&lt;S, R&gt; <a class=\"trait\" href=\"axum_core/extract/trait.FromRequest.html\" title=\"trait axum_core::extract::FromRequest\">FromRequest</a>&lt;S&gt; for <a class=\"struct\" href=\"async_graphql_axum/struct.GraphQLRequest.html\" title=\"struct async_graphql_axum::GraphQLRequest\">GraphQLRequest</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    R: <a class=\"trait\" href=\"axum_core/response/into_response/trait.IntoResponse.html\" title=\"trait axum_core::response::into_response::IntoResponse\">IntoResponse</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"async_graphql/error/enum.ParseRequestError.html\" title=\"enum async_graphql::error::ParseRequestError\">ParseRequestError</a>&gt;,</span>"],["impl&lt;S, R&gt; <a class=\"trait\" href=\"axum_core/extract/trait.FromRequest.html\" title=\"trait axum_core::extract::FromRequest\">FromRequest</a>&lt;S&gt; for <a class=\"struct\" href=\"async_graphql_axum/struct.GraphQLBatchRequest.html\" title=\"struct async_graphql_axum::GraphQLBatchRequest\">GraphQLBatchRequest</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    R: <a class=\"trait\" href=\"axum_core/response/into_response/trait.IntoResponse.html\" title=\"trait axum_core::response::into_response::IntoResponse\">IntoResponse</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"async_graphql/error/enum.ParseRequestError.html\" title=\"enum async_graphql::error::ParseRequestError\">ParseRequestError</a>&gt;,</span>"]],
"axum":[["impl&lt;T, S&gt; <a class=\"trait\" href=\"axum/extract/trait.FromRequest.html\" title=\"trait axum::extract::FromRequest\">FromRequest</a>&lt;S&gt; for <a class=\"struct\" href=\"axum/struct.Form.html\" title=\"struct axum::Form\">Form</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"],["impl&lt;S&gt; <a class=\"trait\" href=\"axum/extract/trait.FromRequest.html\" title=\"trait axum::extract::FromRequest\">FromRequest</a>&lt;S&gt; for <a class=\"struct\" href=\"axum/extract/struct.RawForm.html\" title=\"struct axum::extract::RawForm\">RawForm</a><span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"],["impl&lt;T, S&gt; <a class=\"trait\" href=\"axum/extract/trait.FromRequest.html\" title=\"trait axum::extract::FromRequest\">FromRequest</a>&lt;S&gt; for <a class=\"struct\" href=\"axum/struct.Json.html\" title=\"struct axum::Json\">Json</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]],
"axum_core":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()