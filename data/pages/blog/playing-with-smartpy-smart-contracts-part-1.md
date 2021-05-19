---
templateKey: _blog-post
title: Playing with SmartPy Smart Contracts (Part 1)
author: ameed.jadallah@gmail.com
date: 2021-05-17T13:43:24.675Z
description: >-
  SmartPy was designed for lowering the barrier of entry for smart contract development.
  
  As you can most likely guess from the name, it is based on Python, which is, let’s be honest, not the hardest coding language to learn. Great news, right? It helps us developing Tezos smart contracts in an easier way.

featuredImage: /assets/python-new_.jpeg
tags:
  - devs
---

SmartPy was designed for lowering the barrier of entry for smart contract development.

As you can most likely guess from the name, it is based on Python, which is, let’s be honest, not the hardest coding language to learn. Great news, right? It helps us developing Tezos smart contracts in an easier way.

\
In this article, we’re going to start using SmartPy.io to create a smart contract and play around with it. For this, we will be using their online editor, as it is very clean and gives you access to a lot of different features, which makes it easy to develop and interact with a smart contract.

### Coding Our First Smart Contract!

First, it is important to note: the smart contract we will be coding today won’t be too complicated. Indeed, our goal here is to learn how to use SmartPy to create a smart contract, right, but also to use the Smartpy online editor and some of the features it offers (such as testing, for example).

Basically, our smart contract will be some sort of a **very** **basic** crowdfunding system. People will be able to send any amount to the contract, and the owner will then be able to “cash out” whenever he wants, which will transfer all the Tez in the contract to his address.

If needed, here is the link to the full smart contract: [here](https://smartpy.io/dev/index.html?code=eJytVMFu4jAQvecrRjk5WohIq15WQlpaUamnPZTbahW5tlmsJnZkmyL69TvjBEggsNKqPkA8fjPzZvzGum6sC@Br7kKzB@7BN0kiKu49PHKvxZOzO7neGqnNH@ab_Mma4LgI2fcEcEm1hrLURoeyZF5V6wnYnVGuO6ZF1pwQ7GiixWWtDcxb@GRwJCiHftsGJRe13ZqAMEwd1CebZQPkaRc_fiBKoe@@bKw24ciQS_mMJfjI8Jya5IHnlym_xZw8bpJ_ZhDcb@w2jGdp8g_l9HpP_fPKSOVgPu8lj63I@nhCndCTW0SzJCFSWGIZlA_M8Fphv9KL21vhaZolxDYCO4ZeKMOdtoce@1AeTCwbIPJNwdqwQHG7sEBx8T_NTl06edyx9Ndq@br6DS@oAM0JCWGj2jtGHfXdohRaHliOU96zNHwW02ifdqbOwdtaWaOWlVcjHr3TxcAt_ogCXS7V3Qp32BRUgShuF_aq2j5QmEGaRaWF6rWVC0EXxtJ40CEf7dsYBM0dYFnp0SBkH@_5fZcBGhxqLXTD0RNw2GLfexWnY8Xmx2HJcrc17CDYtpwJ8LOJLGaz7BoNKu5rSWDESwr3D1cZxO59LQUKecnh7uFKG05C@RnlTS8FyQVfi1YyMAV6OyoJO@vex7kMnpczPj3ZXtdoOw@gaFxuMDA2_CeL3sRN4INXWqLxmeM2@wvJtPyD). It contains the tests which we will cover in the next part.

Anyway, let’s kick things off by adding our first line of code, which is importing the library SmartPy.

```javascript
import smartpy as sp
```
