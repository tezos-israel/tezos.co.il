---
templateKey: _blog-post
title: How to Run a Node on the Tezos Blockchain (Part 3)
tags:
  - tezos
category: Devs
published: true
author: contact@tezos.co.il
date: 2020-02-17T13:17:58.416Z
description: How to Run a Node on the Tezos Blockchain (Part 3)
featuredImage: /assets/how-to-run-a-node-part3_cover-300x90.png
---

#### <span style="text-decoration: underline;">**Note: This is Part 3 of  "How to Run a Node on the Tezos Blockchain" Series**</span>

To run a node using Docker, please read **[part 1](https://tezos.co.il/how-to-run-a-node-on-the-tezos-blockchain/)**

To run a node building from sources, please read <span style="text-decoration: underline;">**[part 2](https://tezos.co.il/701-2/)**</span>

Ever wondered how to run a Tezos node? Or why should you run one yourself? If yes, you’re on the right series of articles. In this third part, we’re going to run a node, using Snapshots.

## <span style="text-decoration: underline;">**Running a node using Snapshots**</span>

#### Why would a business runs its own node?

A business should want to run its own node for a few reasons, including more trust, safety, privacy, as well as contributing to Tezos (which is super cool, right?).  
_- Having your own node means you can handle the transactions and make sure they will be broadcasted to the network._

_- When running your own node, you greatly contribute to the Tezos network by increasing safety and decentralization (because of you adding your own node to the network)._

_- If you’re baking, you will receive full rewards for all your operations and you will be to use your vote yourself, and not let another baker do so for you._

_- Another very good reason is that by running your own node, you will be automatically up-to-date with latest upgrades, news, or technical improvements because you will have to keep an eye on them in order to successfully run your node._

# My environment

First thing first, here is the environment I will be using for this tutorial:

![Environment used](https://miro.medium.com/max/988/1*cH5X8EzSAjlkJAlBUDc4Aw.png)  
_Environment used_

In this third part, I will cover how to run a Tezos node using Snapshots.

Let’s dive into it!

# Using Snapshots

Using Snapshots is an intermediary way of running a node. To use Snapshots, you first have to follow the second part of this series, which you can find here: [part 2](https://tezos.co.il/701-2/). Indeed, you need to have Tezos installed and ready to go before you can actually take advantage of Snapshots. You only need the **installation part** of the previous article.

Snapshots are a type of file which contains every necessary information to restore a node at a given block. Therefore, let’s say we use a snapshot at a block which happened a few days ago, it will be way faster for us to synchronize the node, than if we ran one from the beginning as we did in the previous parts.

Please note that, as you’re restoring from a given block, you can not access the chain context (baking rights, balances, …) from before the said block, although you still have access to the full chain history.

With snapshots were introduced history modes. To learn more about both of these notions, **I highly advise you to read [this blog post from Nomadic Labs](https://blog.nomadic-labs.com/introducing-snapshots-and-history-modes-for-the-tezos-node.html)**. Here is one of the many important parts that we will need for this article:

> History modes allow the node to run without maintaining the full archives of the chain. Here are the three first modes: `full` nodes store all chain data since the beginning of the chain, but drop the archived contexts below the current checkpoint. In other words, you can still query any block or operation at any point in the chain, but you cannot query the balances or staking rights too far in the past. `rolling` nodes are currently the most lightweight, only keeping a minimal rolling fragment of the chain and deleting everything before this fragment (blocks, operations and archived contexts). `archive` nodes store everything. This corresponds to the current behavior of Tezos nodes.

Again, I strongly recommend you to read Nomadic’s post as it explains everything you need to know about Snapshots and History Modes.

Anyway, let’s get started! Use your `tezos-sources/tezos` folder from the previous part:

`$ cd tezos-sources/tezos`

Now that you’re inside, you actually need a Snapshot. Snapshots are provided by Tezos’ community. There are several places to get one, but here is the one we will use for this tutorial: [https://tezosshots.com/](https://tezosshots.com/)

![tezosshots.com snapshots](https://miro.medium.com/max/3332/1*TT1g9iKdy1oK3tz_iUQhSg.png)_tezosshots.com snapshots_

As you can see, they currently provide a `Full` node and a `Rolling` node. For this article, let’s use the `Rolling` one, as it is lighter and therefore faster to download.

Once it’s download, you should have a file with the format: `block_hash.rolling`. Place this file into the `tezos-sources/tezos` folder.

## Important Security Note

We just took a snapshot from somewhere on the Internet, and we’re about to import it and run it. Something feels wrong about this, right? Indeed, we have to be careful about potential fake chains. There is no better way to explain it than [Nomadic Labs’ post](https://blog.nomadic-labs.com/introducing-snapshots-and-history-modes-for-the-tezos-node.html) (again, *read it*!):</p>

> "The snapshot format does not (and cannot) provide any evidence that the imported block is actually a part of the current main chain of the Tezos network. To avoid to be fooled by a fake chain, it is necessary to carefully check that the block hash of the imported block is included in the chain. This can be done by comparing the hash to one provided by another node under the user’s control, or by relying on social cues to obtain a hash from a large number of trusted parties which are unlikely to be colluding. After that careful selection or verification of the imported block hash, you can trust the node with the rest of the procedure. In particular, you need not trust the source of the file, the snapshot format contains everything necessary for the node to detect any inconsistency, malicious or not. This safety comes from the fact that block headers are designed to make sure that applying a block has the same result for everyone in the network. To achieve this, they include hashes of their operations and predecessor, as well as the resulting chain state. The import process makes the same checks, recomputing and checking all the hashes it encounters in the snapshot."

I am going to verify it by using a trusted [Tezos Block Explorer](https://tzstats.com/): [https://tzstats.com/BLLkH7kvQV1XUE9x93qtJV9A9ZmvcZ2LUzaSWjdTX8pXr2kZAVL](https://tzstats.com/BLLkH7kvQV1XUE9x93qtJV9A9ZmvcZ2LUzaSWjdTX8pXr2kZAVL)

We’re searching for the block (from the hash given by [https://tezosshots.com/](https://tezosshots.com/)) to make sure it exists, and here is what we get:

![Block BLLkh7[…]SWjdTX8p on tzstats.com](https://miro.medium.com/max/3660/1*LL3ZAJGqvlG6ft9gNb5eIQ.png)  
_Block BLLkh7[…]SWjdTX8p on tzstats.com_

Let’s now use the snapshot! By now you should be in your `tezos-sources/tezos` folder containing Tezos files AND the freshly downloaded `.rolling` file. Use this command to import the snapshot:

`$ ./tezos-node snapshot import FILE.rolling`

In our case: `BLLkH7kvQV1XUE9x93qtJV9A9ZmvcZ2LUzaSWjdTX8pXr2kZAVL.rolling`

**Potential issue**

![](https://miro.medium.com/max/2804/1*qjtMz3Eu57uGJ33d82KmjA.png)

If you see this error, it is because you already ran a node before. As written, you need to remove the specified files. Go to your home folder and remove them, like this:

![Removing previous node data](https://miro.medium.com/max/1120/1*ZIo6v4hK8ii1gF6IT_U-gw.png)  
_Removing previous node data_

Let’s do the command again!

`$ ./tezos-node snapshot import FILE.rolling`

![Successfully imported the snapshot](https://miro.medium.com/max/3712/1*tMI2aZpmQ4ixCIPgW3UESA.png)  
_Successfully imported the snapshot_

Here are the logs after importing our snapshot. It seems like everything went fine. Let’s now try to run our node, as we did in the previous part:

`$ ./tezos-node run --rpc-addr 127.0.0.1`

And our node is now running!

![Node is starting](https://miro.medium.com/max/1772/1*EEilge_Y9C0jq6YFVoubTQ.png)  
_Node is starting_

You can now open a new terminal and, in the same folder, run:

`$ ./tezos-client -A 127.0.0.1 bootstrapped`

`-A` allows to put the IP address of the node (which we set when we started running our node), and `bootstrapped` waits for the node to be bootstrapped/synced. If it’s not, you can see how the synchronization is going.

And you should see something similar to:

![Boostrapping](https://miro.medium.com/max/1888/1*y4-vBvXsjuSMZAi9ta08DA.png)  
_Boostrapping_

As you can see, we’re currently synchronizing blocks from January 27th, 2020, which is the point from which our snapshot was generated (actually, our snapshot was from January 26th, but it synced and went to 27th quickly).

**You successfully imported a `rolling` snapshot and started running it.**

---

This is it for the third and last part of this series of articles. Check part 1 and 2 (linked at the beginning of this article) for additional ways to run your own node.

- [My Twitter](https://twitter.com/cryptomathis)
- Tezos Israel: [Twitter](https://twitter.com/tezosisrael) | [Website](https://tezos.co.il/)
