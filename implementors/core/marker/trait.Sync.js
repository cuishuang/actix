(function() {var implementors = {};
implementors["actix"] = [{"text":"impl Sync for ActorState","synthetic":true,"types":[]},{"text":"impl Sync for Running","synthetic":true,"types":[]},{"text":"impl Sync for SpawnHandle","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for Context&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for ContextParts&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, C&gt; !Sync for ContextFut&lt;A, C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Sync for MessageResult&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Message&gt;::Result: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, T&gt; !Sync for AtomicResponse&lt;A, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I&gt; !Sync for Response&lt;I&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, I&gt; !Sync for ActorResponse&lt;A, I&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for Supervisor&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for AddressSender&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for AddressReceiver&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for Envelope&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for SendError&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for MailboxError","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for Addr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for WeakAddr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Sync for Recipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Sync for WeakRecipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for Mailbox&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for Mocker&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Resolve","synthetic":true,"types":[]},{"text":"impl Sync for Connect","synthetic":true,"types":[]},{"text":"impl Sync for ConnectAddr","synthetic":true,"types":[]},{"text":"impl Sync for ResolverError","synthetic":true,"types":[]},{"text":"impl Sync for Resolver","synthetic":true,"types":[]},{"text":"impl !Sync for TcpConnector","synthetic":true,"types":[]},{"text":"impl&lt;Fut, Fn&gt; Sync for Map&lt;Fut, Fn&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fn: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B, Fn&gt; Sync for Then&lt;A, B, Fn&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fn: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for Timeout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, A&gt; Sync for FutureWrap&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, C&gt; Sync for Collect&lt;S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Sync for Finish&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F, Fut, T&gt; Sync for Fold&lt;S, F, Fut, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; Sync for Map&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, I, Fn, Fut&gt; Sync for SkipWhile&lt;S, I, Fn, Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fn: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, I, Fut, Fn&gt; Sync for TakeWhile&lt;S, I, Fut, Fn&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fn: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, Fn, F&gt; Sync for Then&lt;S, Fn, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fn: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Sync for Timeout&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, A&gt; Sync for StreamWrap&lt;S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E&gt; !Sync for Writer&lt;T, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, T, U&gt; !Sync for FramedWrite&lt;I, T, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, S&gt; !Sync for SinkWrite&lt;I, S&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for Registry","synthetic":true,"types":[]},{"text":"impl !Sync for SystemRegistry","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for SyncArbiter&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for SyncContext&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Condition&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for TimerFunc&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Sync for IntervalFunc&lt;A&gt;","synthetic":true,"types":[]}];
implementors["actix_broker"] = [{"text":"impl&lt;T&gt; !Sync for Broker&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Sync for SystemBroker","synthetic":true,"types":[]},{"text":"impl Sync for ArbiterBroker","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()