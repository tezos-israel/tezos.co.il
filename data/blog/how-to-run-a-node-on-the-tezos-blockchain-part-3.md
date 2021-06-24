---
templateKey: _blog-post
title: How to Run a Node on the Tezos Blockchain (Part 3)
category: Devs
published: true
author: contact@tezos.co.il
date: 2020-02-17T13:17:58.416Z
description: How to Run a Node on the Tezos Blockchain (Part 3)
featuredImage: https://tezos.co.il/wp-content/uploads/2020/04/how-to-run-a-node-part3_cover.png
---

<h4><span style="text-decoration: underline;"><strong>Note: This is Part 3 of  "How to Run a Node on the Tezos Blockchain" Series</strong></span></h4>
<p class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">To run a node using Docker, please read <strong><a href="https://tezos.co.il/how-to-run-a-node-on-the-tezos-blockchain/">part 1</a></strong></p>
<p id="14e8" class="fm fn ay gd fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">To run a node building from sources, please read <span style="text-decoration: underline;"><strong><a href="https://tezos.co.il/701-2/">part 2</a></strong></span></p>
<p id="6ebe" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Ever wondered how to run a Tezos node? Or why should you run one yourself? If yes, you’re on the right series of articles. In this third part, we’re going to run a node, using Snapshots.</p>

<h2><span style="text-decoration: underline;"><strong>Running a node using Snapshots</strong></span></h2>
<h4 id="c7ad" class="ge gf ay bq au gg di gh dk gi gj gk gl gm gn go gp">Why would a business runs its own node?</h4>
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

\[caption id="" align="alignnone" width="494"]<img class="kx ky cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/988/1*cH5X8EzSAjlkJAlBUDc4Aw.png" alt="Environment used" width="494" height="310" /> Environment used\[/caption]

</div>
</div>
</div>
<figcaption class="bt aw hx hy hz cs cq cr ia ib au av" data-selectable-paragraph=""></figcaption></figure>
<p id="3fbd" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">In this third part, I will cover how to run a Tezos node using Snapshots.</p>
<p id="af4e" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Let’s dive into it!</p>

<h1 id="55af" class="ge gf ay bq au gg di gh dk gi gj gk gl gm gn go gp" data-selectable-paragraph="">Using Snapshots</h1>
<p class="fm fn ay bq fo b fp gq fr gr ft gs fv gt fx gu fz cz" data-selectable-paragraph="">Using Snapshots is an intermediary way of running a node. To use Snapshots, you first have to follow the second part of this series, which you can find here: <a href="https://tezos.co.il/701-2/">part 2</a><strong class="fo ic">. </strong>Indeed, you need to have Tezos installed and ready to go before you can actually take advantage of Snapshots. You only need the <strong class="fo ic">installation part </strong>of the previous article.</p>
<p id="0966" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Snapshots are a type of file which contains every necessary information to restore a node at a given block. Therefore, let’s say we use a snapshot at a block which happened a few days ago, it will be way faster for us to synchronize the node, than if we ran one from the beginning as we did in the previous parts.</p>
<p id="5912" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Please note that, as you’re restoring from a given block, you can not access the chain context (baking rights, balances, …) from before the said block, although you still have access to the full chain history.</p>
<p id="1e08" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">With snapshots were introduced history modes. To learn more about both of these notions, <strong class="fo ic">I highly advise you to read </strong><a class="ba cl id ie if ig" href="https://blog.nomadic-labs.com/introducing-snapshots-and-history-modes-for-the-tezos-node.html" target="_blank" rel="noopener nofollow noreferrer"><strong class="fo ic">this blog post from Nomadic Labs</strong></a>. Here is one of the many important parts that we will need for this article:</p>

<blockquote class="ga gb gc">
<p id="1fa3" class="fm fn ay gd fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">History modes allow the node to run without maintaining the full archives of the chain.</p>
<p id="de9a" class="fm fn ay gd fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Here are the three first modes:</p>
<p id="1302" class="fm fn ay gd fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph=""><code class="hr ih ii ij ik b">full</code> nodes store all chain data since the beginning of the chain, but drop the archived contexts below the current checkpoint. In other words, you can still query any block or operation at any point in the chain, but you cannot query the balances or staking rights too far in the past.</p>
<p id="c61b" class="fm fn ay gd fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph=""><code class="hr ih ii ij ik b">rolling</code> nodes are currently the most lightweight, only keeping a minimal rolling fragment of the chain and deleting everything before this fragment (blocks, operations and archived contexts).</p>
<p id="0a29" class="fm fn ay gd fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph=""><code class="hr ih ii ij ik b">archive</code> nodes store everything. This corresponds to the current behavior of Tezos nodes.</p>
</blockquote>
<p id="b9e7" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Again, I strongly recommend you to read Nomadic’s post as it explains everything you need to know about Snapshots and History Modes.</p>
<p id="280b" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Anyway, let’s get started! Use your <code class="hr ih ii ij ik b">tezos-sources/tezos</code> folder from the previous part:</p>
<code>$ cd tezos-sources/tezos</code>
<p id="f138" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Now that you’re inside, you actually need a Snapshot. Snapshots are provided by Tezos’ community. There are several places to get one, but here is the one we will use for this tutorial: <a class="ba cl id ie if ig" href="https://tezosshots.com/" target="_blank" rel="noopener nofollow noreferrer">https://tezosshots.com/</a></p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="it iu hq iv ak">
<div class="cq cr is">
<div class="hp r hq hr">
<div class="iw r">
<div class="hk hl cu t u hm ak ej hn ho"></div>

\[caption id="" align="alignnone" width="1072"]<img class="kx ky cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/3332/1*TT1g9iKdy1oK3tz_iUQhSg.png" alt="tezosshots.com snapshots" width="1072" height="307" /> tezosshots.com snapshots\[/caption]

</div>
</div>
</div>
</div>
<figcaption class="bt aw hx hy hz cs cq cr ia ib au av" data-selectable-paragraph=""></figcaption></figure>
<p id="31de" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">As you can see, they currently provide a <code class="hr ih ii ij ik b">Full</code> node and a <code class="hr ih ii ij ik b">Rolling</code> node. For this article, let’s use the <code class="hr ih ii ij ik b">Rolling</code> one, as it is lighter and therefore faster to download.</p>
<p id="0c72" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Once it’s download, you should have a file with the format: <code class="hr ih ii ij ik b">block_hash.rolling</code>. Place this file into the <code class="hr ih ii ij ik b">tezos-sources/tezos</code> folder.</p>

<h2 id="7acf" class="io gf ay bq au gg ix iy iz ja jb jc jd je jf jg jh" data-selectable-paragraph="">Important Security Note</h2>
<p id="fb2e" class="fm fn ay bq fo b fp gq fr gr ft gs fv gt fx gu fz cz" data-selectable-paragraph="">We just took a snapshot from somewhere on the Internet, and we’re about to import it and run it. Something feels wrong about this, right? Indeed, we have to be careful about potential fake chains. There is no better way to explain it than <a class="ba cl id ie if ig" href="https://blog.nomadic-labs.com/introducing-snapshots-and-history-modes-for-the-tezos-node.html" target="_blank" rel="noopener nofollow noreferrer">Nomadic Labs’ post</a> (again, <em class="gd">read it</em>!):</p>

<blockquote>
<p id="fad8" class="fm fn ay gd fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">"The snapshot format does not (and cannot) provide any evidence that the imported block is actually a part of the current main chain of the Tezos network. To avoid to be fooled by a fake chain, it is necessary to carefully check that the block hash of the imported block is included in the chain. This can be done by comparing the hash to one provided by another node under the user’s control, or by relying on social cues to obtain a hash from a large number of trusted parties which are unlikely to be colluding.</p>
After that careful selection or verification of the imported block hash, you can trust the node with the rest of the procedure. In particular, you need not trust the source of the file, the snapshot format contains everything necessary for the node to detect any inconsistency, malicious or not.
<p id="142a" class="fm fn ay gd fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">This safety comes from the fact that block headers are designed to make sure that applying a block has the same result for everyone in the network. To achieve this, they include hashes of their operations and predecessor, as well as the resulting chain state. The import process makes the same checks, recomputing and checking all the hashes it encounters in the snapshot."</p>
</blockquote>
<p id="9772" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">I am going to verify it by using a trusted <a class="ba cl id ie if ig" href="https://tzstats.com/" target="_blank" rel="noopener nofollow noreferrer">Tezos Block Explorer</a>: <a class="ba cl id ie if ig" href="https://tzstats.com/BLLkH7kvQV1XUE9x93qtJV9A9ZmvcZ2LUzaSWjdTX8pXr2kZAVL" target="_blank" rel="noopener nofollow noreferrer">https://tzstats.com/BLLkH7kvQV1XUE9x93qtJV9A9ZmvcZ2LUzaSWjdTX8pXr2kZAVL</a></p>
<p id="d2b0" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">We’re searching for the block (from the hash given by <a class="ba cl id ie if ig" href="https://tezosshots.com/" target="_blank" rel="noopener nofollow noreferrer">https://tezosshots.com/</a>) to make sure it exists, and here is what we get:</p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="it iu hq iv ak">
<div class="cq cr ji">
<div class="hp r hq hr">
<div class="jj r">
<div class="hk hl cu t u hm ak ej hn ho"></div>
\[caption id="" align="alignnone" width="1101"]<img class="kx ky cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/3660/1*LL3ZAJGqvlG6ft9gNb5eIQ.png" alt="Block BLLkh7\[…]SWjdTX8p on tzstats.com" width="1101" height="402" /> Block BLLkh7\[…]SWjdTX8p on tzstats.com\[/caption]</div>
</div>
</div>
</div>
<figcaption class="bt aw hx hy hz cs cq cr ia ib au av" data-selectable-paragraph=""></figcaption></figure>
<p id="156d" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Let’s now use the snapshot! By now you should be in your <code class="hr ih ii ij ik b">tezos-sources/tezos</code> folder containing Tezos files AND the freshly downloaded <code class="hr ih ii ij ik b">.rolling</code> file. Use this command to import the snapshot:</p>
<p class="he hf hg hh hi il im in"><span id="447b" class="io gf ay bq ik b aw ip iq r ir" data-selectable-paragraph=""><code>$ ./tezos-node snapshot import FILE.rolling</code></span></p>
<p id="d5b8" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">In our case: <code class="hr ih ii ij ik b">BLLkH7kvQV1XUE9x93qtJV9A9ZmvcZ2LUzaSWjdTX8pXr2kZAVL.rolling</code></p>
<p id="3c6b" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph=""><strong class="fo ic">Potential issue</strong>:</p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="it iu hq iv ak">
<div class="cq cr jk">
<div class="hp r hq hr">
<div class="jl r">
<div class="hk hl cu t u hm ak ej hn ho"></div>
<img class="kx ky cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/2804/1*qjtMz3Eu57uGJ33d82KmjA.png" width="1060" height="224" />

</div>
</div>
</div>
</div></figure>
<p id="72fb" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">If you see this error, it is because you already ran a node before. As written, you need to remove the specified files. Go to your home folder and remove them, like this:</p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="cq cr jm">
<div class="hp r hq hr">
<div class="jn r">
<div class="hk hl cu t u hm ak ej hn ho"></div>

\[caption id="" align="alignnone" width="560"]<img class="kx ky cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/1120/1*ZIo6v4hK8ii1gF6IT_U-gw.png" alt="Removing previous node data" width="560" height="226" /> Removing previous node data\[/caption]

</div>
</div>
</div>
<figcaption class="bt aw hx hy hz cs cq cr ia ib au av" data-selectable-paragraph=""></figcaption></figure>
<p id="0cb1" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Let’s do the command again!</p>
<p class="he hf hg hh hi il im in"><span id="addf" class="io gf ay bq ik b aw ip iq r ir" data-selectable-paragraph=""><code>$ ./tezos-node snapshot import FILE.rolling</code></span></p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="it iu hq iv ak">
<div class="cq cr jo">
<div class="hp r hq hr">
<div class="jp r">
<div class="hk hl cu t u hm ak ej hn ho"></div>

\[caption id="" align="alignnone" width="1104"]<img class="kx ky cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/3712/1*tMI2aZpmQ4ixCIPgW3UESA.png" alt="Successfully imported the snapshot" width="1104" height="244" /> Successfully imported the snapshot\[/caption]

</div>
</div>
</div>
</div>
<figcaption class="bt aw hx hy hz cs cq cr ia ib au av" data-selectable-paragraph=""></figcaption></figure>
<p id="93a5" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">Here are the logs after importing our snapshot. It seems like everything went fine. Let’s now try to run our node, as we did in the previous part:</p>
<p class="he hf hg hh hi il im in"><span id="cc4e" class="io gf ay bq ik b aw ip iq r ir" data-selectable-paragraph=""><code>$ ./tezos-node run --rpc-addr 127.0.0.1</code></span></p>
<p id="e39a" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">And our node is now running!</p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="it iu hq iv ak">
<div class="cq cr jq">
<div class="hp r hq hr">
<div class="jr r">
<div class="hk hl cu t u hm ak ej hn ho"></div>

\[caption id="" align="alignnone" width="886"]<img class="kx ky cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/1772/1*EEilge_Y9C0jq6YFVoubTQ.png" alt="Node is starting" width="886" height="84" /> Node is starting\[/caption]

</div>
</div>
</div>
</div>
<figcaption class="bt aw hx hy hz cs cq cr ia ib au av" data-selectable-paragraph=""></figcaption></figure>
<p id="dc24" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">You can now open a new terminal and, in the same folder, run:</p>
<p class="he hf hg hh hi il im in"><span id="79bf" class="io gf ay bq ik b aw ip iq r ir" data-selectable-paragraph=""><code>$ ./tezos-client -A 127.0.0.1 bootstrapped</code></span></p>
<p id="010d" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph=""><code class="hr ih ii ij ik b">-A</code> allows to put the IP address of the node (which we set when we started running our node), and <code class="hr ih ii ij ik b">bootstrapped</code> waits for the node to be bootstrapped/synced. If it’s not, you can see how the synchronization is going.</p>
<p id="b5e8" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">And you should see something similar to:</p>

<figure class="he hf hg hh hi hj cq cr paragraph-image">
<div class="it iu hq iv ak">
<div class="cq cr js">
<div class="hp r hq hr">
<div class="jt r">
<div class="hk hl cu t u hm ak ej hn ho"></div>

\[caption id="" align="alignnone" width="944"]<img class="kx ky cu t u hm ak hw" role="presentation" src="https://miro.medium.com/max/1888/1*y4-vBvXsjuSMZAi9ta08DA.png" alt="Boostrapping" width="944" height="660" /> Boostrapping\[/caption]

</div>
</div>
</div>
</div>
<figcaption class="bt aw hx hy hz cs cq cr ia ib au av" data-selectable-paragraph=""></figcaption></figure>
<p id="be44" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph="">As you can see, we’re currently synchronizing blocks from January 27th, 2020, which is the point from which our snapshot was generated (actually, our snapshot was from January 26th, but it synced and went to 27th quickly).</p>
<p id="cd52" class="fm fn ay bq fo b fp fq fr fs ft fu fv fw fx fy fz cz" data-selectable-paragraph=""><strong>You successfully imported a <code class="hr ih ii ij ik b">rolling</code> snapshot and started running it.</strong></p>

<hr />
<p class="graf graf--p">This is it for the third and last part of this series of articles. Check part 1 and 2 (linked at the beginning of this article) for additional ways to run your own node.</p>

<ul>
 	<li><a class="markup--anchor markup--li-anchor" href="https://twitter.com/cryptomathis" target="_blank" rel="noopener noreferrer" data-href="https://twitter.com/cryptomathis">My Twitter</a></li>
 	<li>Tezos Israel: <a class="markup--anchor markup--li-anchor" href="https://twitter.com/tezosisrael" target="_blank" rel="noopener noreferrer" data-href="https://twitter.com/tezosisrael">Twitter</a> | <a class="markup--anchor markup--li-anchor" href="https://tezos.co.il/" target="_blank" rel="noopener noreferrer" data-href="https://tezos.co.il/">Website</a></li>
</ul>
