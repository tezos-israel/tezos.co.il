---
templateKey: _blog-post
title: How to Run a Node on the Tezos Blockchain (Part 2)
category: Devs
published: true
author: contact@tezos.co.il
date: 2020-02-17T12:46:13.580Z
description: How to Run a Node on the Tezos Blockchain (Part 2)
featuredImage: https://tezos.co.il/wp-content/uploads/2020/04/how-to-run-a-node-part2_cover.png
---

<h4><span style="text-decoration: underline;"><strong>Note: This is \*Part 2\* of  “How to Run a Node on the Tezos Blockchain” Series</strong></span></h4>
<p id="14e8" class="fm fn ay gd fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">To run a node using Docker, please read <a href="https://tezos.co.il/how-to-run-a-node-on-the-tezos-blockchain/">part 1</a></p>
<p class="fm fn ay gd fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">To run a node using a snapshot, please read <a href="https://tezos.co.il/719-2/">part 3</a></p>
<p class="fm fn ay gd fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Ever wondered how to run a Tezos node? Or why should you run one yourself? If yes, you’re on the right series of articles. In this second part, we’re going to run a node, building it from sources.</p>

<h2><span style="text-decoration: underline;"><strong>Running a Node, And Building it From Sources</strong></span></h2>
<h3 id="c7ad" class="ge gf ay bq au gg di gh dk gi gj gk gl gm gn go gp">Why would a business runs its own node?</h3>
<p id="c2e5" class="fm fn ay bq fo b fp gq fr gr ft gs fv gt fx gu fz cz" data-selectable-paragraph="">A business should want to run its own node for a few reasons, including more trust, safety, privacy, as well as contributing to Tezos (which is super cool, right?).</p>
<em>- Having your own node means you can handle the transactions and make sure they will be broadcasted to the network.</em>

<em>- When running your own node, you greatly contribute to the Tezos network by increasing safety and decentralization (because of you adding your own node to the network).</em>

<em>- If you’re baking, you will receive full rewards for all your operations and you will be to use your vote yourself, and not let another baker do so for you.</em>

<em>- Another very good reason is that by running your own node, you will be automatically up-to-date with latest upgrades, news, or technical improvements because you will have to keep an eye on them in order to successfully run your node.</em>

<h1 id="fadc" class="ge gf ay bq au gg di gh dk gi gj gk gl gm gn go gp" data-selectable-paragraph="">My environment</h1>
<p id="ba53" class="fm fn ay bq fo b fp gq fr gr ft gs fv gt fx gu fz cz" data-selectable-paragraph="">First thing first, here is the environment I will be using for this tutorial:</p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="cq cr hd">
<div class="hp r hq hr">
<div class="hs r">
<div class="hk hl cu t u hm ak ej hn ho"></div>

\[caption id="" align="alignnone"]<img class="kt ku cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/988/1*cH5X8EzSAjlkJAlBUDc4Aw.png" alt="Environment used" /> Environment used\[/caption]

</div>
</div>
</div>
<figcaption class="bt aw hx hy hz cs cq cr ia ib au av" data-selectable-paragraph=""></figcaption></figure>
<p id="3fbd" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">In this second part, I will cover how to run a Tezos node, building it from sources.</p>
<p id="af4e" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Let’s dive into it!</p>

<h1 id="55af" class="ge gf ay bq au gg di gh dk gi gj gk gl gm gn go gp" data-selectable-paragraph="">Building from sources</h1>
<p id="bd62" class="fm fn ay bq fo b fp gq fr gr ft gs fv gt fx gu fz cz" data-selectable-paragraph="">Building from sources to run your own node is the method which takes the most time, but it allows for better understanding of what you’re actually doing.</p>
<p id="390e" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Let’s start by creating a <code class="hr ic id ie if b">tezos-sources</code> folder for the tutorial. Make sure to go inside it once it’s created. To do so, you can run:</p>
<p class="he hf hg hh hi ig ih ii"><span id="7464" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ mkdir tezos-sources &amp;&amp; cd tezos-sources</code></span></p>
<p id="2ef3" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Now, you should be in the <code class="hr ic id ie if b">tezos-sources</code> folder, and we can start downloading the libraries we will need.</p>
<p class="he hf hg hh hi ig ih ii"><span id="8936" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ brew install hidapi libev gpatch opam</code></span></p>
<p id="8f09" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Next, we need to get the sources of Tezos by, first, cloning Tezos’ repo, then going into the <code class="hr ic id ie if b">tezos</code> folder, and finally choosing the branch we want (mainnet in our case):</p>
<p class="he hf hg hh hi ig ih ii"><span id="41a3" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ git clone <a class="ba cl in io ip iq" href="https://gitlab.com/tezos/tezos.git" target="_blank" rel="noopener nofollow noreferrer">https://gitlab.com/tezos/tezos.git</a></code>
<code>$ cd tezos</code>
<code>$ git checkout mainnet</code></span></p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="is it hq iu ak">
<div class="cq cr ir">
<div class="hp r hq hr">
<div class="iv r">
<div class="hk hl cu t u hm ak ej hn ho"></div>

\[caption id="" align="alignnone"]<img class="kt ku cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/2748/1*gGZpqf1j0-VYyfHu3zhzeQ.png" alt="Getting sources of Tezos" /> Getting sources of Tezos\[/caption]

</div>
</div>
</div>
</div>
<figcaption class="bt aw hx hy hz cs cq cr ia ib au av" data-selectable-paragraph=""></figcaption></figure>
<p id="8fd7" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Everything is going great so far. To continue, we need OPAM, the OCaml Package Manager. We already installed it with <code class="hr ic id ie if b">brew</code> above, but let’s continue the setup.</p>
<p id="7476" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Run this, and answer “y” if you need:</p>
<p class="he hf hg hh hi ig ih ii"><span id="2431" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ opam init --bare</code></span></p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="is it hq iu ak">
<div class="cq cr iw">
<div class="hp r hq hr">
<div class="ix r">
<div class="hk hl cu t u hm ak ej hn ho"></div>

\[caption id="" align="alignnone"]<img class="kt ku cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/2720/1*E4MiBBuxMr_Z0-jSPZ5Wnw.png" alt="Initializing OPAM" /> Initializing OPAM\[/caption]

</div>
</div>
</div>
</div>
<figcaption class="bt aw hx hy hz cs cq cr ia ib au av" data-selectable-paragraph=""></figcaption></figure>
<p id="6128" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Then, we need to install the OCaml Compiler as well as extra libraries Tezos will need. Run the following command:</p>
<p class="he hf hg hh hi ig ih ii"><span id="1e99" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ make build-deps</code></span></p>
<p id="897b" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">This command will take some time. After a few minutes, you should have successfully installed the OCaml Compiler and all the extra libraries.</p>
<p id="5abd" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Finally, let’s update OPAM’s environment with:</p>
<p class="he hf hg hh hi ig ih ii"><span id="2fc1" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ eval $(opam env)</code></span></p>
<p id="a8ae" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">and compile the project:</p>
<p class="he hf hg hh hi ig ih ii"><span id="d877" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ make</code></span></p>
<p id="dcb6" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">If you did not have any issue, you should be ready to go. If you had an issue, unfortunately I can not really help on this article since it could be due to a lot of different things. However, if you feel like it’s on Tezos side, feel free to post your issue to get some help on <a class="ba cl in io ip iq" href="https://tezos.stackexchange.com/" target="_blank" rel="noopener nofollow noreferrer">Tezos’ StackExchange</a>.</p>
<p id="bc1d" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">If you want to add Tezos binaries to your path, run:</p>
<p class="he hf hg hh hi ig ih ii"><span id="a85c" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ export PATH=~/tezos:$PATH</code></span></p>
<p id="226d" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz">To make sure that you have everything, as advised by <a class="ba cl in io ip iq" href="https://tezos.gitlab.io/introduction/howtouse.html" target="_blank" rel="noopener nofollow noreferrer"><strong class="fo iy">Tezos’ Official Documentation</strong></a>, please check that you have the following in your folder:</p>

<ul>
 	<li><code>tezos-node</code>: the tezos daemon itself;</li>
 	<li><code>tezos-client</code>: a command-line client and basic wallet;</li>
 	<li><code>tezos-admin-client</code>: administration tool for the node;</li>
 	<li><code>tezos-{baker,endorser,accuser}-alpha</code>: daemons to bake, endorse and accuse on the Tezos network. NOTE: as you’re on a production branch, the binary’s suffix won’t be “alpha” but “partial hash of the protocol they are bound to, such as”: <code>006-PsCARTHA</code> for example;</li>
 	<li><code>tezos-signer</code>: a client to remotely sign operations or blocks;</li>
</ul>
<p id="c979" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz">Now that you are sure everything went well, let’s start running our node! (Finally, right?)</p>

<h2 id="fa09" class="ij gf ay bq au gg iz ja jb jc jd je jf jg jh ji jj" data-selectable-paragraph="">Running our node</h2>
<p id="951e" class="fm fn ay bq fo b fp gq fr gr ft gs fv gt fx gu fz cz" data-selectable-paragraph="">First thing first, feel free to use the <code class="hr ic id ie if b">man</code> command to get access to the manual for each binary. Example:</p>
<p class="he hf hg hh hi ig ih ii"><span id="6c03" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ ./tezos-client man</code></span></p>
<p id="22f7" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">In order to run our node, we first need to generate an identity, which will be used to connect to the network. Run this command:</p>
<p class="he hf hg hh hi ig ih ii"><span id="8740" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ ./tezos-node identity generate</code></span></p>
<p id="d8a8" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">It may takes up to a few seconds/minutes. After waiting for a bit, you should see the new identity you just generated, right after the Generating message.</p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="is it hq iu ak">
<div class="cq cr jk">
<div class="hp r hq hr">
<div class="jl r">
<div class="hk hl cu t u hm ak ej hn ho"></div>

\[caption id="" align="alignnone"]<img class="kt ku cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/1524/1*qKHf6GkpywQEUWo4Y58a7A.png" alt="Generating a new identity…" /> Generating a new identity…\[/caption]

</div>
</div>
</div>
</div>
<figcaption class="bt aw hx hy hz cs cq cr ia ib au av" data-selectable-paragraph=""></figcaption></figure>
<p id="bd58" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Let’s now start our node! Running a node is as easy as running this command:</p>
<p class="he hf hg hh hi ig ih ii"><span id="7f31" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ ./tezos-node run</code></span></p>
<p id="571a" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">However, for this tutorial, I will add a parameter to communicate with the node later. Run this:</p>
<p class="he hf hg hh hi ig ih ii"><span id="e209" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ ./tezos-node run --rpc-addr 127.0.0.1</code></span></p>
<p id="51ab" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">According to the man (<code class="hr ic id ie if b">./tezos-node man</code>), the <code class="hr ic id ie if b">--rpc-addr</code> parameter allows us to provide the TCP socket address at which this RPC server instance can be reached.</p>
<p id="2d64" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph=""><strong class="fo iy">Your node should be running by now</strong>. As it’s the first time running the node, it will take <strong class="fo iy">a lot of time</strong> (up to a few days if you don’t have a very good hardware) to <strong class="fo iy">synchronize the chain</strong>. It basically starts in 2018, when Tezos was launched. If you don’t need to synchronize the whole chain, please see part 3, <a href="https://tezos.co.il/719-2/">here</a>.</p>
<p id="c0d4" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">If you want to make sure your node is running AND, at the same time, know at which date you are synchronizing, open a new window or tab of your terminal, go inside your tezos folder (should be <code class="hr ic id ie if b">/tezos-sources/tezos</code> if you did the same thing as me in the beginning), and run this:</p>
<p class="he hf hg hh hi ig ih ii"><span id="d01d" class="ij gf ay bq if b aw ik il r im" data-selectable-paragraph=""><code>$ ./tezos-client -A 127.0.0.1 bootstrapped</code></span></p>
<p id="57fe" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Be sure to be in the <code class="hr ic id ie if b">tezos</code> folder. <code class="hr ic id ie if b">-A</code> allows to put the IP address of the node (which we set when we started running our node), and <code class="hr ic id ie if b">bootstrapped</code> waits for the node to be bootstrapped/synced. If it’s not, you can see how the synchronization is going.</p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="is it hq iu ak">
<div class="cq cr jm">
<div class="hp r hq hr">
<div class="jn r">
<div class="hk hl cu t u hm ak ej hn ho"></div>

\[caption id="" align="alignnone"]<img class="kt ku cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/2544/1*o0HlVwhupqikauHQZpiQRA.png" alt="Waiting for the node to be bootstrapped" /> Waiting for the node to be bootstrapped\[/caption]

</div>
</div>
</div>
</div>
<figcaption class="bt aw hx hy hz cs cq cr ia ib au av" data-selectable-paragraph=""></figcaption></figure>
<p id="849c" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Our node seems to be running fine. As you can see with the <code class="hr ic id ie if b">timestamp</code>, we’re currently synchronizing July 7th, 2018 and it will take more time to catch up until today.</p>
<p id="d834" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">If our node was not running, here is what would’ve happened when we ran the <code class="hr ic id ie if b">bootstrapped</code> command:</p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="is it hq iu ak">
<div class="cq cr jo">
<div class="hp r hq hr">
<div class="jp r">
<div class="hk hl cu t u hm ak ej hn ho"></div>

\[caption id="" align="alignnone"]<img class="kt ku cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/1924/1*thSeb2n1NYtokcAtd3cyjQ.png" alt="Node is not running" /> Node is not running\[/caption]

</div>
</div>
</div>
</div></figure>

<hr />
<p class="graf graf--p">This is it for the second part of this series of articles. Check part 1 and 3 (linked at the beginning of this article) for additional ways to run your own node.</p>

<ul class="postList">
 	<li class="graf graf--li"><a class="markup--anchor markup--li-anchor" href="https://twitter.com/cryptomathis" target="_blank" rel="noopener noreferrer" data-href="https://twitter.com/cryptomathis">My Twitter</a></li>
 	<li class="graf graf--li">Tezos Israel: <a class="markup--anchor markup--li-anchor" href="https://twitter.com/tezosisrael" target="_blank" rel="noopener noreferrer" data-href="https://twitter.com/tezosisrael">Twitter</a> | <a class="markup--anchor markup--li-anchor" href="https://tezos.co.il/" target="_blank" rel="noopener noreferrer" data-href="https://tezos.co.il/">Website</a></li>
</ul>
