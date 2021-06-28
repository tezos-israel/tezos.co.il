---
templateKey: _blog-post
title: How to Run a Node on the Tezos Blockchain (Part 2)
tags:
  - tezos
category: Devs
published: true
author: contact@tezos.co.il
date: 2020-02-17T12:46:13.580Z
description: How to Run a Node on the Tezos Blockchain (Part 2)
featuredImage: /assets/how-to-run-a-node-part2_cover-300x90.png
mediumContent: ''
---

#### **Note: This is _Part 2_ of  “How to Run a Node on the Tezos Blockchain” Series**

To run a node using Docker, please read [part 1](https://tezos.co.il/how-to-run-a-node-on-the-tezos-blockchain)

To run a node using a snapshot, please read [part 3](https://tezos.co.il/719-2/)

Ever wondered how to run a Tezos node? Or why should you run one yourself? If yes, you’re on the right series of articles. In this second part, we’re going to run a node, building it from sources.

## **Running a Node, And Building it From Sources**

### Why would a business runs its own node?

A business should want to run its own node for a few reasons, including more trust, safety, privacy, as well as contributing to Tezos (which is super cool, right?).

_- Having your own node means you can handle the transactions and make sure they will be broadcasted to the network._

_- When running your own node, you greatly contribute to the Tezos network by increasing safety and decentralization (because of you adding your own node to the network)._

_- If you’re baking, you will receive full rewards for all your operations and you will be to use your vote yourself, and not let another baker do so for you._

_- Another very good reason is that by running your own node, you will be automatically up-to-date with latest upgrades, news, or technical improvements because you will have to keep an eye on them in order to successfully run your node._

# My environment

First thing first, here is the environment I will be using for this tutorial:

![Environment used](https://miro.medium.com/max/988/1*cH5X8EzSAjlkJAlBUDc4Aw.png)  
_Environment used_

In this second part, I will cover how to run a Tezos node, building it from sources.  
Let’s dive into it!

# Building from sources

Building from sources to run your own node is the method which takes the most time, but it allows for better understanding of what you’re actually doing.

Let’s start by creating a `tezos-sources` folder for the tutorial. Make sure to go inside it once it’s created. To do so, you can run:

`$ mkdir tezos-sources && cd tezos-sources`

Now, you should be in the `tezos-sources` folder, and we can start downloading the libraries we will need.

`$ brew install hidapi libev gpatch opam`

Next, we need to get the sources of Tezos by, first, cloning Tezos’ repo, then going into the `tezos` folder, and finally choosing the branch we want (mainnet in our case):

`$ git clone https://gitlab.com/tezos/tezos.git`  
`$ cd tezos`  
`$ git checkout mainnet`

![Getting sources of Tezos](https://miro.medium.com/max/2748/1*gGZpqf1j0-VYyfHu3zhzeQ.png)  
_Getting sources of Tezos_

Everything is going great so far. To continue, we need OPAM, the OCaml Package Manager. We already installed it with `brew` above, but let’s continue the setup.

Run this, and answer “y” if you need:

`$ opam init --bare`

![Initializing OPAM](https://miro.medium.com/max/2720/1*E4MiBBuxMr_Z0-jSPZ5Wnw.png)  
_Initializing OPAM_

Then, we need to install the OCaml Compiler as well as extra libraries Tezos will need. Run the following command:  
`$ make build-deps`

This command will take some time. After a few minutes, you should have successfully installed the OCaml Compiler and all the extra libraries.

Finally, let’s update OPAM’s environment with:

`$ eval $(opam env)`

and compile the project:

`$ make`

If you did not have any issue, you should be ready to go. If you had an issue, unfortunately I can not really help on this article since it could be due to a lot of different things. However, if you feel like it’s on Tezos side, feel free to post your issue to get some help on [Tezos’ StackExchange](https://tezos.stackexchange.com/)

If you want to add Tezos binaries to your path, run:

`$ export PATH=~/tezos:$PATH`

To make sure that you have everything, as advised by **[Tezos’ Official Documentation](https://tezos.gitlab.io/introduction/howtouse.html)**, please check that you have the following in your folder:

- `tezos-node`: the tezos daemon itself;
- `tezos-client`: a command-line client and basic wallet;
- `tezos-admin-client`: administration tool for the node;
- `tezos-{baker,endorser,accuser}-alpha`: daemons to bake, endorse and accuse on the Tezos network. NOTE: as you’re on a production branch, the binary’s suffix won’t be “alpha” but “partial hash of the protocol they are bound to, such as”: `006-PsCARTHA` for example;
- `tezos-signer`: a client to remotely sign operations or blocks;

Now that you are sure everything went well, let’s start running our node! (Finally, right?)

## Running our node

First thing first, feel free to use the `man` command to get access to the manual for each binary. Example:

`$ ./tezos-client man`

In order to run our node, we first need to generate an identity, which will be used to connect to the network. Run this command:

`$ ./tezos-node identity generate`

It may takes up to a few seconds/minutes. After waiting for a bit, you should see the new identity you just generated, right after the Generating message.

![Generating a new identity…](https://miro.medium.com/max/1524/1*qKHf6GkpywQEUWo4Y58a7A.png)  
_Generating a new identity…_

Let’s now start our node! Running a node is as easy as running this command:

`$ ./tezos-node run`

However, for this tutorial, I will add a parameter to communicate with the node later. Run this:

`$ ./tezos-node run --rpc-addr 127.0.0.1`

According to the man (`./tezos-node man`), the `--rpc-addr` parameter allows us to provide the TCP socket address at which this RPC server instance can be reached.

**Your node should be running by now**. As it’s the first time running the node, it will take **a lot of time** (up to a few days if you don’t have a very good hardware) to **synchronize the chain**. It basically starts in 2018, when Tezos was launched. If you don’t need to synchronize the whole chain, please see part 3, [here](https://tezos.co.il/719-2/)

If you want to make sure your node is running AND, at the same time, know at which date you are synchronizing, open a new window or tab of your terminal, go inside your tezos folder (should be `/tezos-sources/tezos` if you did the same thing as me in the beginning), and run this:

`$ ./tezos-client -A 127.0.0.1 bootstrapped`

Be sure to be in the `tezos` folder. `-A` allows to put the IP address of the node (which we set when we started running our node), and `bootstrapped` waits for the node to be bootstrapped/synced. If it’s not, you can see how the synchronization is going.

![Waiting for the node to be bootstrapped](https://miro.medium.com/max/2544/1*o0HlVwhupqikauHQZpiQRA.png)  
_Waiting for the node to be bootstrapped_

Our node seems to be running fine. As you can see with the `timestamp`, we’re currently synchronizing July 7th, 2018 and it will take more time to catch up until today.

If our node was not running, here is what would’ve happened when we ran the `bootstrapped` command:`

![Node is not running](https://miro.medium.com/max/1924/1*thSeb2n1NYtokcAtd3cyjQ.png)  
_Node is not running_

---

This is it for the second part of this series of articles. Check part 1 and 3 (linked at the beginning of this article) for additional ways to run your own node.

- [My Twitter](https://twitter.com/cryptomathis)
- Tezos Israel: [Twitter](https://twitter.com/tezosisrael) | [Website](https://tezos.co.il/)
