---
templateKey: _blog-post
title: Playing with SmartPy Smart Contracts (Part 1)
tags: []
category: Devs
published: true
author: contact@tezos.co.il
date: 2020-08-24T20:09:49.636Z
description: Playing with SmartPy Smart Contracts (Part 1)
featuredImage: /assets/python-new_.jpeg
mediumContent: ''
---

SmartPy was designed for lowering the barrier of entry for smart contract development.

As you can most likely guess from the name, it is based on Python, which is, let's be honest, not the hardest coding language to learn. Great news, right? It helps us developing Tezos smart contracts in an easier way.

In this article, we're going to start using SmartPy.io to create a smart contract and play around with it. For this, we will be using their online editor, as it is very clean and gives you access to a lot of different features, which makes it easy to develop and interact with a smart contract.

### Coding Our First Smart Contract!

First, it is important to note: the smart contract we will be coding today won’t be too complicated. Indeed, our goal here is to learn how to use SmartPy to create a smart contract, right, but also to use the Smartpy online editor and some of the features it offers (such as testing, for example).

Basically, our smart contract will be some sort of a **very basic** crowdfunding system. People will be able to send any amount to the contract, and the owner will then be able to “cash out” whenever he wants, which will transfer all the Tez in the contract to his address.

If needed, here is the link to the full smart contract: [here](https://smartpy.io/dev/index.html?code=eJytVMFu4jAQvecrRjk5WohIq15WQlpaUamnPZTbahW5tlmsJnZkmyL69TvjBEggsNKqPkA8fjPzZvzGum6sC@Br7kKzB@7BN0kiKu49PHKvxZOzO7neGqnNH@ab_Mma4LgI2fcEcEm1hrLURoeyZF5V6wnYnVGuO6ZF1pwQ7GiixWWtDcxb@GRwJCiHftsGJRe13ZqAMEwd1CebZQPkaRc_fiBKoe@@bKw24ciQS_mMJfjI8Jya5IHnlym_xZw8bpJ_ZhDcb@w2jGdp8g_l9HpP_fPKSOVgPu8lj63I@nhCndCTW0SzJCFSWGIZlA_M8Fphv9KL21vhaZolxDYCO4ZeKMOdtoce@1AeTCwbIPJNwdqwQHG7sEBx8T_NTl06edyx9Ndq@br6DS@oAM0JCWGj2jtGHfXdohRaHliOU96zNHwW02ifdqbOwdtaWaOWlVcjHr3TxcAt_ogCXS7V3Qp32BRUgShuF_aq2j5QmEGaRaWF6rWVC0EXxtJ40CEf7dsYBM0dYFnp0SBkH@_5fZcBGhxqLXTD0RNw2GLfexWnY8Xmx2HJcrc17CDYtpwJ8LOJLGaz7BoNKu5rSWDESwr3D1cZxO59LQUKecnh7uFKG05C@RnlTS8FyQVfi1YyMAV6OyoJO@vex7kMnpczPj3ZXtdoOw@gaFxuMDA2_CeL3sRN4INXWqLxmeM2@wvJtPyD). It contains the tests which we will cover in the next part.

Anyway, let’s kick things off by adding our first line of code, which is importing the library SmartPy.

`import smartpy as sp`

With SmartPy, a contract is basically a class definition which inherits from `sp.Contract`, such as:

`class BasicCrowdfunding(sp.Contract):`

Here, our class is named `BasicCrowdfunding`. Our class then needs a `__init__` constructor which will call `self.init()` in order to, as we can see from the name of the function, initialize all the fields we have in our contract’s storage.

```
def __init__(self, owner):
                self.init(
                    admin = owner,
                    contributedAmount = sp.tez(0)
                    )
```

We’re initializing two fields: `admin` and `contributedAmount`.

First we assign `owner`, which we get from parameters, to `admin`. This basically, contains the `tz1` address of the contract’s owner.

Then, we set `contributedAmount` to `sp.tez(0)`, representing 0tez. `contributedAmount` is here to track the amount of Tez that was contributed to the crowdfunding (0 when we’re initiating the contract).

This is how it should look so far:

```
import smartpy as sp

class BasicCrowdfunding(sp.Contract):
    def __init__(self, owner):
        self.init(
            admin = owner,
            contributedAmount = sp.tez(0)
            )
```

We’re done with the first part. Now we need to add **entry points** so that we can call the contract from outside.

### But, what are entry points?!

From the [SmartPy Reference Manual](https://www.smartpy.io/dev/reference.html), we learn that “_An entry point is a method of a contract class that can be called from the outside._” To summarize it quickly, it’s like a public function that can be called in order to interact with the smart contract.

In our basic crowdfunding smart contract, we need two entry points. One for people to be able to contribute any amount of tez to the crowdfunding, and one for the owner to get his funds (let’s say 4 people contributed a total of 500 tez, the owner needs to be able to get those 500 from the contract’s balance to his own `tz1` address, right?). Let’s add them now!

The first thing we need to know before adding any entry point is that every time we will want to add one, we will have to add a `@sp.entry_point` decorator, so that it can be marked as an entry point.

So let’s write our first entry point inside our `BasicCrowdfunding` class, so that people can contribute to the crowdfunding.

```
@sp.entry_point
def addFunds(self):
    self.data.contributedAmount += sp.amount
```

We named this entry point `addFunds`. It does not take any arguments other than `self`. It’s a simple one, with only one line of code. We basically increment `self.data.contributedAmount` (which we initialized to 0 when first initiating the contract) by `sp.amount`, the amount of tez transferred to our contract. So, as a quick example, let’s say Matthew contributes 20 tez to our crowdfunding, `contributedAmount` will be equal to 20 tez until someone else contribute as well.

Every time the `addFunds` entry point is called, the contract’s balance will be updated as well. We will be using the `contributedAmount` to know how much to send to owner when he requests his funds.

Here is how the code should look so far:

```
import smartpy as sp
class BasicCrowdfunding(sp.Contract):
    def __init__(self, owner):
        self.init(
            admin = owner,
            contributedAmount = sp.tez(0)
            )

    @sp.entry_point
    def addFunds(self):
        self.data.contributedAmount += sp.amount
```

So, now that people can contribute to the basic crowdfunding, we need to add a way for the owner to be able to access the funds. To do that, let’s write a second entry point:

```
@sp.entry_point
def cashoutFunds(self):
    sp.verify(sp.sender == self.data.admin)
    sp.send(sp.sender, self.data.contributedAmount)
```

As always when defining an entry point, we added the `@sp.entry_point` decorator. Here we named it `cashoutFunds` and it only accepts `self` as arguments.

In the first line, we use the method `sp.verify()` to make sure that `sp.sender` (the sender’s address) matches with `self.data.admin` (the contract’s owner). We are basically checking that the person making the funds request is actually authorized to do so. If it is not the contract’s owner, then the person is **NOT** authorized, and therefore the entry point will just fail, and nothing will be done.

If this requirement is fulfilled, we can then move on to the next line. We use the method `sp.send()` which takes two arguments: `destination` and `amount`. Our `destination`, of type `sp.TAddress`, is `sp.sender` (now that we made sure it was the contract’s owner), and the `amount` we send is the total amount contributed, `self.data.contributedAmount`.

Here is how our final contract looks like:

```
import smartpy as sp
class BasicCrowdfunding(sp.Contract):
    def __init__(self, owner):
        self.init(
            admin = owner,
            contributedAmount = sp.tez(0)
            )

    @sp.entry_point
    def addFunds(self):
        self.data.contributedAmount += sp.amount

    @sp.entry_point
    def cashoutFunds(self):
        sp.verify(sp.sender == self.data.admin)
        sp.send(sp.sender, self.data.contributedAmount)
```

As explained earlier, it’s a pretty basic one. But we were able to discover SmartPy, get started with it, use entry points as well as a few methods. And we’re not done… indeed, in the next part, we are going to see how we can test this smart contract, directly in the SmartPy online IDE.

Stay tuned!
