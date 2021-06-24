---
templateKey: _blog-post
title: How to Run a Node on the Tezos Blockchain (Part 1)
category: Devs
published: true
author: contact@tezos.co.il
date: 2020-02-16T11:54:22.631Z
description: How to Run a Node on the Tezos Blockchain (Part 1)
featuredImage: https://tezos.co.il/wp-content/uploads/2020/04/how-to-run-a-node-part1_cover.png
---

<h4><span style="text-decoration: underline;"><strong>Note: This is *Part 1* of  “How to Run a Node on the Tezos Blockchain” Series</strong></span></h4>
<span style="font-weight: 400;">To run a node building from sources, please read <a href="https://tezos.co.il/701-2/">part 2</a></span>

<span style="font-weight: 400;">To run a node using a snapshot, please read<a href="https://tezos.co.il/719-2/"> part 3</a></span>

<h3></h3>
<span style="font-weight: 400;">Ever wondered how to run a Tezos node? Or why should you run one yourself? If yes, you’re on the right series of articles. In this first part, we’re going to run a node using Docker.</span>
<h2><b>How to Run a Node on Tezos Using Docker</b></h2>
&nbsp;
<h3><b>Why would a business run its own node?</b></h3>
A business should want to run its own node for a few reasons, including more trust, safety, privacy, as well as contributing to Tezos (which is super cool, right?).

<em>- Having your own node means you can handle the transactions and make sure they will be broadcasted to the network.</em>

<em>- When running your own node, you greatly contribute to the Tezos network by increasing safety and decentralization (because of you adding your own node to the network).</em>

<em>-  If you’re <a href="https://tezos.co.il/baking/">“baking”</a>, you will receive full rewards for all your operations and you will be to vote yourself, and not let another “Baker” do so for you.</em>

<em>- Another very good reason is that by running your own node, you will be automatically up-to-date with latest upgrades, news, or technical improvements because you will have to keep an eye on them in order to successfully run your node.</em>

<h4><strong>My Environment</strong></h4>
<em><span style="font-weight: 400;">First thing first, here is the environment I will be using for this tutorial:</span></em>

<figure>
<img src="https://miro.medium.com/max/988/1*cH5X8EzSAjlkJAlBUDc4Aw.png" alt="Environment Used" /> 
<figcaption>Environment Used</figcaption>
</figure>

<em><span style="font-weight: 400;">In this first part, I will cover how to run a Tezos node using Docker.</span></em>

<em><span style="font-weight: 400;">Let’s dive into it!</span></em>

<h3><b>Using Docker</b></h3>
<span style="font-weight: 400;">To run an up-to-date node, using Docker is probably the easiest way. You can setup your own node under minutes. Let’s see how.</span>

<span style="font-weight: 400;">First, make sure you have </span><b>Docker</b><span style="font-weight: 400;"> and </span><b>docker-compose</b><span style="font-weight: 400;"> installed on your computer. You can check by opening your terminal and entering the following commands:</span>

<figure>
<img src="https://miro.medium.com/max/2276/1*2HVH312aQFyvuYN-wsuqlg.png" alt="Checking that Docker is installed " /> <figcaption>Checking that Docker is installed </figcaption>
</figure>

<span style="font-weight: 400;">If you don’t have Docker installed, please install it</span><a href="https://www.docker.com/get-started"> <b>here</b></a><span style="font-weight: 400;">. Once it’s done, come back and check with the commands above.</span>

<span style="font-weight: 400;">To make sure Docker is working well, we can run the simple</span><a href="https://hub.docker.com/_/hello-world/"> <span style="font-weight: 400;">hello-world</span></a><span style="font-weight: 400;"> image from</span><a href="https://docs.docker.com/"> <span style="font-weight: 400;">Docker’s official documentation</span></a><span style="font-weight: 400;">:</span>

<figure>
<img src="https://miro.medium.com/max/2620/1*K51bO9txk7c_PXaFwEyn0A.png" alt="Checking that Docker is working" /> <figcaption>Checking that Docker is working </figcaption>
</figure>

<em><strong>If you see this, it means that Docker is working well and we are ready to go.</strong></em>

<span style="font-weight: 400;">Let’s continue by creating a tezos-docker folder for the tutorial. Make sure to go inside it once it’s created. To do so, you can run:</span>

<code>$ mkdir tezos-docker &amp;&amp; cd tezos-docker</code>

<span style="font-weight: 400;">Basically, Tezos docker images are automatically generated from the</span><a href="https://gitlab.com/tezos/tezos"> <span style="font-weight: 400;">GitLab repository</span></a><span style="font-weight: 400;"> and then made available on</span><a href="https://hub.docker.com/r/tezos/tezos/"> <span style="font-weight: 400;">DockerHub</span></a><span style="font-weight: 400;">.</span>

<span style="font-weight: 400;">Therefore, we can get the latest Mainnet image by doing this:</span>

<code><span style="font-weight: 400;">$ wget -O mainnet.sh </span><a href="https://gitlab.com/tezos/tezos/raw/master/scripts/alphanet.sh"><span style="font-weight: 400;">https://gitlab.com/tezos/tezos/raw/master/scripts/alphanet.sh</span></a></code>

<code><span style="font-weight: 400;">$ chmod +x mainnet.sh</span></code>

<span style="font-weight: 400;">If you don’t have wget, install it by doing <code>$ brew install wget</code>.</span>

<i><span style="font-weight: 400;">(Note: you see <code>alphanet.sh</code> at the end of the url, which is normal. It is the script responsible for downloading the right image for each network (Mainnet, Babylonnet or Zeronet) and then running a node)</span></i>

<em><strong>Here is what you should see if everything went well:</strong></em>

<figure>
<img src="https://miro.medium.com/max/2608/1*QN3CHzLXflR8UcFWFsCEtg.png" alt="Result" />
<figcaption>Result</figcaption>
</figure>

<strong>We’re almost there! </strong>

<span style="font-weight: 400;">Running the <code>mainnet.sh</code> script will download the mainnet docker image and launch 3 different services: the node, the baker and the endorser. Let’s do so:</span>

<span style="font-weight: 400;"><code>$ ./mainnet.sh start</code></span>

<span style="font-weight: 400;">Here is our result:</span>

<figure>
<img src="https://miro.medium.com/max/2296/1*bWjJKmUokpRyt_LlCN79cQ.png" alt="Running the Mainscript" /> 
<figcaption>Running the Mainscript</figcaption>
</figure>

<span style="font-weight: 400;">We see a warning, let’s synchronize as advised:</span>

<span style="font-weight: 400;"><code>$ ./mainnet.sh update_script</code></span>

<span style="font-weight: 400;">You should see </span><b>“The script has been updated”</b><span style="font-weight: 400;">. However, you may have to give permissions to <code>mainnet.sh</code> again, by doing so:</span>

<span style="font-weight: 400;"><code>$ chmod +x mainnet.sh</code></span>

<span style="font-weight: 400;">After starting again the Mainnet script, here is what we get:</span>

<figure>
<img src="https://miro.medium.com/max/2752/1*kzzSYFG3JwMU7EKl7s8GIw.png" alt="Up-to-date Mainnet" /> 
<figcaption>Up-to-date Mainnet</figcaption>
</figure>

<span style="font-weight: 400;">Your node should be running. Here is how to check:</span>

<span style="font-weight: 400;"><code>$ ./mainnet.sh node status</code></span>

<figure>
<img src="https://miro.medium.com/max/1148/1*T0DXbref6on-PMMZ4SzTPw.png" alt="Node is Running!" /> 
<figcaption>Node is Running!</figcaption>
</figure>

<b>Boom! Our node is running ;)</b><span style="font-weight: 400;"> </span>

<span style="font-weight: 400;">Now, here is the thing though… Since it’s the first time you’re running a node, it will take some time to </span><b>synchronize the chain</b><span style="font-weight: 400;">. It basically starts in 2018, when Tezos was launched. If you don’t need to synchronize the whole chain, please see part 3, <a href="https://tezos.co.il/719-2/">here</a>.</span>

<span style="font-weight: 400;">You can also use the following command to see logs:</span>

<span style="font-weight: 400;"><code>$ ./mainnet.sh node log</code></span>

<span style="font-weight: 400;">If you want to stop running your node, you can run:</span>

<span style="font-weight: 400;"><code>$ ./mainnet.sh node stop</code></span>

<span style="font-weight: 400;">Alternatively, if you want to stop running all the services, run this:</span>

<span style="font-weight: 400;"><code>$ ./mainnet.sh stop</code></span>

<figure>
<img src="https://miro.medium.com/max/1592/1*1O05Ki8OEE_B3oZyIalXBw.png" alt="Stopping the services (node, baker, endorser, …)" /> 
<figcaption>Stopping the services (node, baker, endorser, …)</figcaption>
</figure>

<span style="font-weight: 400;">Feel free to use the following command to check what you can do with the script:</span>

<span style="font-weight: 400;"><code>$ ./mainnet.sh --help</code></span>

<span style="font-weight: 400;">This will display some help and information about the script itself.</span>

<hr />

<ul>
 	<li style="font-weight: 400;"><a href="https://twitter.com/cryptomathis"><span style="font-weight: 400;">My Twitter</span></a></li>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">Tezos Israel:</span><a href="https://twitter.com/tezosisrael"> <span style="font-weight: 400;">Twitter</span></a><span style="font-weight: 400;"> |</span><a href="https://tezos.co.il/"> <span style="font-weight: 400;">Website</span></a></li>
</ul>
&nbsp;
