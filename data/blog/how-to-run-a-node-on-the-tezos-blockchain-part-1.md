---
templateKey: _blog-post
title: How to Run a Node on the Tezos Blockchain (Part 1)
tags:
  - tezos
category: Devs
published: true
author: contact@tezos.co.il
date: 2020-02-16T11:54:28.076Z
description: How to Run a Node on the Tezos Blockchain (Part 1)
featuredImage: /assets/how-to-run-a-node-part1_cover-300x90.png
mediumContent: ''
---

#### **Note: This is _Part 1_ of  “How to Run a Node on the Tezos Blockchain” Series**

To run a node building from sources, please read [part 2](https://tezos.co.il/701-2/)

To run a node using a snapshot, please read [part 3](https://tezos.co.il/719-2/)

Ever wondered how to run a Tezos node? Or why should you run one yourself? If yes, you’re on the right series of articles. In this first part, we’re going to run a node using Docker.

## How to Run a Node on Tezos Using Docker

### Why would a business run its own node?

A business should want to run its own node for a few reasons, including more trust, safety, privacy, as well as contributing to Tezos (which is super cool, right?).

_- Having your own node means you can handle the transactions and make sure they will be broadcasted to the network._

_- When running your own node, you greatly contribute to the Tezos network by increasing safety and decentralization (because of you adding your own node to the network)._

_-  If you’re [“baking”](https://tezos.co.il/baking/), you will receive full rewards for all your operations and you will be to vote yourself, and not let another “Baker” do so for you._

_- Another very good reason is that by running your own node, you will be automatically up-to-date with latest upgrades, news, or technical improvements because you will have to keep an eye on them in order to successfully run your node._

#### My Environment

_First thing first, here is the environment I will be using for this tutorial:_

![Environment Used](https://miro.medium.com/max/988/1*cH5X8EzSAjlkJAlBUDc4Aw.png) _Environment Used_

_In this first part, I will cover how to run a Tezos node using Docker._

_Let’s dive into it!_

### Using Docker

To run an up-to-date node, using Docker is probably the easiest way. You can setup your own node under minutes. Let’s see how.

First, make sure you have **Docker** and **docker-compose** installed on your computer. You can check by opening your terminal and entering the following commands:

![Checking that Docker is installed](https://miro.medium.com/max/2276/1*2HVH312aQFyvuYN-wsuqlg.png) _Checking that Docker is installed_

If you don’t have Docker installed, please install it **[here](https://www.docker.com/get-started)**. Once it’s done, come back and check with the commands above.

To make sure Docker is working well, we can run the simple [hello-world](https://hub.docker.com/_/hello-world/) image from [Docker’s official documentation](https://docs.docker.com/):

![Checking that Docker is working](https://miro.medium.com/max/2620/1*K51bO9txk7c_PXaFwEyn0A.png) _Checking that Docker is working_

**If you see this, it means that Docker is working well and we are ready to go.**

Let’s continue by creating a tezos-docker folder for the tutorial. Make sure to go inside it once it’s created. To do so, you can run:

`$ mkdir tezos-docker && cd tezos-docker`

Basically, Tezos docker images are automatically generated from the [GitLab repository](https://gitlab.com/tezos/tezos) and then made available on [DockerHub](https://hub.docker.com/r/tezos/tezos/).

Therefore, we can get the latest Mainnet image by doing this:

`$ wget -O mainnet.sh https://gitlab.com/tezos/tezos/raw/master/scripts/alphanet.sh`

`$ chmod +x mainnet.sh`

If you don’t have wget, install it by doing `$ brew install wget`.

_(Note: you see `alphanet.sh` at the end of the url, which is normal. It is the script responsible for downloading the right image for each network (Mainnet, Babylonnet or Zeronet) and then running a node)_

**_Here is what you should see if everything went well:_**

![](https://miro.medium.com/max/2608/1*QN3CHzLXflR8UcFWFsCEtg.png)  
_Result_

**We’re almost there!**

Running the `mainnet.sh` script will download the mainnet docker image and launch 3 different services: the node, the baker and the endorser. Let’s do so:

`$ ./mainnet.sh start`

Here is our result:

![Running the Mainscript](https://miro.medium.com/max/2296/1*bWjJKmUokpRyt_LlCN79cQ.png)  
_Running the Mainscript_

We see a warning, let’s synchronize as advised:

`$ ./mainnet.sh update_script`

You should see **“The script has been updated”**. However, you may have to give permissions to `mainnet.sh` again, by doing so:

`$ chmod +x mainnet.sh`

After starting again the Mainnet script, here is what we get:

![Up-to-date Mainnet](https://miro.medium.com/max/2752/1*kzzSYFG3JwMU7EKl7s8GIw.png)  
_Up-to-date Mainnet_

Your node should be running. Here is how to check:

`$ ./mainnet.sh node status`

![Node is Running!](https://miro.medium.com/max/1148/1*T0DXbref6on-PMMZ4SzTPw.png)  
_Node is Running!_

**Boom! Our node is running ;)**

Now, here is the thing though… Since it’s the first time you’re running a node, it will take some time to **synchronize the chain**. It basically starts in 2018, when Tezos was launched. If you don’t need to synchronize the whole chain, please see part 3, [here](https://tezos.co.il/719-2/)

You can also use the following command to see logs:

`$ ./mainnet.sh node log`

If you want to stop running your node, you can run:

`$ ./mainnet.sh node stop`

Alternatively, if you want to stop running all the services, run this:

`$ ./mainnet.sh stop`

![Stopping the services (node, baker, endorser, …)](https://miro.medium.com/max/1592/1*1O05Ki8OEE_B3oZyIalXBw.png)  
_Stopping the services (node, baker, endorser, …)_

Feel free to use the following command to check what you can do with the script:

`$ ./mainnet.sh --help`

This will display some help and information about the script itself.

---

- [My Twitter](https://twitter.com/cryptomathis)
- Tezos Israel: [Twitter](https://twitter.com/tezosisrael) | [Website](https://tezos.co.il/)
