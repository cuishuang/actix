(function() {var implementors = {};
implementors["actix"] = [{"text":"impl Send for ActorState","synthetic":true,"types":[]},{"text":"impl Send for Running","synthetic":true,"types":[]},{"text":"impl Send for SpawnHandle","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Send for Context&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Send for ContextParts&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, C&gt; !Send for ContextFut&lt;A, C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Send for MessageResult&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Message&gt;::Result: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, T&gt; !Send for AtomicResponse&lt;A, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I&gt; !Send for Response&lt;I&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, I&gt; !Send for ActorResponse&lt;A, I&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Send for Supervisor&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Send for AddressSender&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Send for AddressReceiver&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Send for Envelope&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for SendError&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for MailboxError","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Send for Addr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Send for WeakAddr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Send for Recipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Send for WeakRecipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Send for Mailbox&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Send for Mocker&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Send for Resolve","synthetic":true,"types":[]},{"text":"impl Send for Connect","synthetic":true,"types":[]},{"text":"impl Send for ConnectAddr","synthetic":true,"types":[]},{"text":"impl Send for ResolverError","synthetic":true,"types":[]},{"text":"impl Send for Resolver","synthetic":true,"types":[]},{"text":"impl !Send for TcpConnector","synthetic":true,"types":[]},{"text":"impl&lt;Fut, Fn&gt; Send for Map&lt;Fut, Fn&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fn: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B, Fn&gt; Send for Then&lt;A, B, Fn&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fn: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for Timeout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, A&gt; Send for FutureWrap&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, C&gt; Send for Collect&lt;S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for Finish&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F, Fut, T&gt; Send for Fold&lt;S, F, Fut, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; Send for Map&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, I, Fn, Fut&gt; Send for SkipWhile&lt;S, I, Fn, Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fn: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, I, Fut, Fn&gt; Send for TakeWhile&lt;S, I, Fut, Fn&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fn: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, Fn, F&gt; Send for Then&lt;S, Fn, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fn: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for Timeout&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, A&gt; Send for StreamWrap&lt;S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E&gt; !Send for Writer&lt;T, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, T, U&gt; !Send for FramedWrite&lt;I, T, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, S&gt; !Send for SinkWrite&lt;I, S&gt;","synthetic":true,"types":[]},{"text":"impl !Send for Registry","synthetic":true,"types":[]},{"text":"impl Send for SystemRegistry","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Send for SyncArbiter&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Send for SyncContext&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Condition&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Send for TimerFunc&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Send for IntervalFunc&lt;A&gt;","synthetic":true,"types":[]}];
implementors["actix_broker"] = [{"text":"impl&lt;T&gt; !Send for Broker&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Send for SystemBroker","synthetic":true,"types":[]},{"text":"impl Send for ArbiterBroker","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()