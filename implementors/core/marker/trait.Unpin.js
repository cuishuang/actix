(function() {var implementors = {};
implementors["actix"] = [{"text":"impl Unpin for ActorState","synthetic":true,"types":[]},{"text":"impl Unpin for Running","synthetic":true,"types":[]},{"text":"impl Unpin for SpawnHandle","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for Context&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for ContextParts&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, C&gt; Unpin for ContextFut&lt;A, C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Unpin for MessageResult&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Message&gt;::Result: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, T&gt; Unpin for AtomicResponse&lt;A, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I&gt; Unpin for Response&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, I&gt; Unpin for ActorResponse&lt;A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for AddressSender&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for AddressReceiver&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for Envelope&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for SendError&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for MailboxError","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for Addr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for WeakAddr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Unpin for Recipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; Unpin for WeakRecipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for Mailbox&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Mocker&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Resolve","synthetic":true,"types":[]},{"text":"impl Unpin for Connect","synthetic":true,"types":[]},{"text":"impl Unpin for ConnectAddr","synthetic":true,"types":[]},{"text":"impl Unpin for ResolverError","synthetic":true,"types":[]},{"text":"impl Unpin for Resolver","synthetic":true,"types":[]},{"text":"impl&lt;T, E&gt; Unpin for Writer&lt;T, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, T, U&gt; Unpin for FramedWrite&lt;I, T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;I, S&gt; Unpin for SinkWrite&lt;I, S&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Registry","synthetic":true,"types":[]},{"text":"impl Unpin for SystemRegistry","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for SyncArbiter&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for SyncContext&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Condition&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for IntervalFunc&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'__pin, A&gt; Unpin for Supervisor&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, A&gt;: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Supervised,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Actor&lt;Context = Context&lt;A&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin&gt; Unpin for TcpConnector <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, Fut, Fn&gt; Unpin for Map&lt;Fut, Fn&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, Fut, Fn&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, A, B, Fn&gt; Unpin for Then&lt;A, B, Fn&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, A, B, Fn&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, F&gt; Unpin for Timeout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, F&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, F, A&gt; Unpin for FutureWrap&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, F, A&gt;: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Future,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Actor,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, S, C&gt; Unpin for Collect&lt;S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, C&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, S&gt; Unpin for Finish&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, S, F, Fut, T&gt; Unpin for Fold&lt;S, F, Fut, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, F, Fut, T&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, S, F&gt; Unpin for Map&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, F&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, S, I, Fn, Fut&gt; Unpin for SkipWhile&lt;S, I, Fn, Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, I, Fn, Fut&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, S, I, Fut, Fn&gt; Unpin for TakeWhile&lt;S, I, Fut, Fn&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, I, Fut, Fn&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, S, Fn, F&gt; Unpin for Then&lt;S, Fn, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, Fn, F&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, S&gt; Unpin for Timeout&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, S, A&gt; Unpin for StreamWrap&lt;S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, A&gt;: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Actor,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'__pin, A:&nbsp;Actor&gt; Unpin for TimerFunc&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, A&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["actix_broker"] = [{"text":"impl&lt;T&gt; Unpin for Broker&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for SystemBroker","synthetic":true,"types":[]},{"text":"impl Unpin for ArbiterBroker","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()