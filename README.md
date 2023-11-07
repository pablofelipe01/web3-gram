BIDIRECTIONAL TOKENIZATION MODEL (BTM)
A bidirectional token is a Smart Contract with a price sensor, self-liquidity generator, self- guarded and self-regulated deployed on a blockchain
The problem:
Crypto tokens became the worst part of the problem they sought to solve. “A Peer-to-Peer Electronic Cash System” *1 Why?

1) Usefulness:

Most tokens don’t answer the question, what is the token for? In general, they are issued to obtain resources, and this response does not work because the tokens become a kind of security or unregulated commodity, risky for both the issuer and the buyer. *2

2) Volatility, Speculation and Liquidity:

Crypto Tokens are traded on a CEX (Centralized Exchange) where liquidity is not transparent or decentralized and the price is usually tied to everything that happens on the CEX (FTX can be cited as an example). The other way to trade Crypto Tokens is on a DEX (Decentralized Exchange); here, liquidity is transparent and decentralized, but always depends on a third party, and this creates two problems:

a)Normally the liquidity in the DEX does not represent the totality of the tokens issued.

b)The liquidity provider is unknown, and therefore the conflicts of interest that it may have with the token, so the price of a token is often synthetically inflated and then liquidity disappears.

3) Network Usage:

The Blockchain is an immutable network of transactional registration and not of securities registration. *3

Our Solution:

BTMs (Bidirectional Tokenization Model) are interchangeable assets linked to a brand, a company, a content creator, or any type of community with aligned incentives. They are custom assets that allow their holders to unlock interactions, and specific experiences or simply invest in their favorite brands or people.

Although individual monetization will undoubtedly evolve beyond our current conceptual understanding, BTMs can serve as the main pillar of how value creators allocate, transfer, and extract value directly from the communities (customers, employees, fans, followers, etc.) for which they work tirelessly. In theory, brands should be able to extract value from their name alone.

BTMs exemplify the main spirit of how intermediaries should not be a necessary condition for value transfer. BTMs are a pathway to financial and creative independence for both brands and their community.

The success of any brand or value creator comes from fostering the growth of their community. With a BTM, as their community grows, a thriving economy is formed that rewards both the value creator and their community.

This system allows bidirectional exchanges, so participants can buy and sell their tokens at any time without submitting to the risks of volatility, speculation, and liquidity that the Cryptocurrency Exchanges have, centralized (CEX) and/or decentralized (DEX). *4

This is achieved by a mathematical model that facilitates the joining of a bonding curve with a fungible interlace.

This combination creates an automated market model (AMM) that sets the price of one token relative to another and to supply.

● The weighted mathematical equation is a generalization of the constant product formula x ∗ y = k recommended for automated market makers (AMM).

○ Generalization n ≥ 2 accounts for weights that are not a uniform division of 50/50. *5

A binding curve consists of a base token and a destination token:

● The *base token is the one with which we establish the price in relation.

● The target token is the new token created.

*In general, the base token should have a reasonably high market capitalization, USDC, for example.

A simple example could be:

P = 0.01
This means that the Price when there is a Token in circulation is:

0.01 * 1 = 0.01
So when there are 100 Tokens in circulation the Price is:

0.01 * 100 = 1

When a destination token is purchased, the price in base tokens is left as a reserve. When a destination token is sold, it is burned, and the base tokens are returned from the reserve to the holder’s wallet.

What happens if you want to establish a relationship between the target supply and the reserve that is maintained? This is called:

Invariable modeling, price cores, and risk aversion. *6
An example of a binding curve with price P and supply S

P = S^0,5
You can define R, the number of base tokens stored in the reserves, as the area under the curve up to the current supply:

Therefore, if you take the indefinite integral, you can say that the Reserve is:


R = 0.666667S^1.5

Now, what happens when base tokens are injected into the Reserve?

This causes all holders to see an increase in the value of the token. Our previous formula does not take this possibility into account in pricing. So how is this model supported?

Given the Reserve function.

R = 0.666667S^1.5

It is said that the reserve is always proportional to the offer in a relationship that should never change.

0.666667S^1.5 / R
Keeping this proportion unchanged, if the reserve is increased by an amount Δ *7

ΔR, the increase in supply ΔS should maintain this formula:
0.666667S^1.5 / R = 0.666667(S+ΔS)^1.5 / R+ΔR

Solving for S, we can say that given a certain amount of the base token of the R curve, the destination tokens we get should be:

S = S — (S^1.5 (R+ΔR)/R )^0.66666666667
Similarly, by solving for R, it can be said that our price for a certain amount of

destination tokens S is:

R=R^1,5 +R(S+ΔS)^1.5 /S^1.5

It is worth noting that both equations fail for R = 0 or S = 0. When this is true, it reverts to the base pricing formula of:

R = c0.666667S^1.5

Where c is a constant that will help to establish the slope of the initial curve and therefore the initial price.

* NOTES:

*1 https://bitcoin.org/bitcoin.pdf https://ethereum.org/en/whitepaper/
*2 https://www.sec.gov/ICO
*3 https://www.ibm.com/topics/what-is-blockchain
*4 https://mpost.io/what-is-a-liquidity-crisis-and-what-does-it-mean-for-crypto-investors/

*5 Weighted mathematics is designed to allow for exchanges between any asset, whether or not they have a price correlation. Prices are determined by the balances of the group, the weights of the group, and the amounts of assets that are exchanged.

*6 Invariable modelings, price cores, and risk aversion
Maria Grith, Wolfgang K. Härdle, Juhyun Park Publication: Journal of Financial Econometrics, 2013: 11 (2), 370–399 Date: November, 2012 Link:

https://academic.oup.com/jfec/article-abstract/11/2/370/782499?redirectedFrom=PDF&login=false#

*7 In mathematics, delta is used in front of a variable to indicate a change in the value of that variable Referenced Mathematical Models:

● N-dimensional surface (Balancer Model) by Vitalik Buterin

● Shape Invariant Modeling of Pricing Kernels and Risk Aversion by Maria Grith, Wolfgang K. Härdle, Juhyun Park

● A State-Space Modeling Framework. by Michael Zargham

Pablo Acebedo

https://www.toksol.io

https://www.linkedin.com/in/pablo-f-acebedo/ pablofelipe@me.c# web3-gram
