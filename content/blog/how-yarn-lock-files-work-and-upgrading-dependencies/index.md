---
slug: '/how-yarn-lock-files-work-and-upgrading-dependencies'
date: '2019-07-16'
title: 'How Yarn Lock Files Work and Upgrading Dependencies'
# Description should be no more than 160 characters in length
description: 'Learn why yarn generates a lock file, why a lock file is useful, and how to upgrade dependencies with a lock file present.'
categories: ['developer tools']
banner: './images/banner.png'
---

![How Yarn Lock Files Work and Upgrading Dependencies](./images/banner.png)

This article has a goal of explaining the purpose of a `yarn.lock` file as well as how to upgrade dependencies when a lock file is present. Many people see it as a nuisance to have a `yarn.lock` file since it adds an extra file to a project and it often appears in code reviews whenever a dependency is modified (and sometimes the resulting file diff can be quite large). However, the `yarn.lock` file is important to have if working on a team or even if working alone with a CI server.

## How lock files work

When using [yarn](https://yarnpkg.com/en/) to manage NPM dependencies, a `yarn.lock` file is generated automatically. Also any time a dependency is added, removed, or modified with the yarn CLI (e.g. running the `yarn install` command), the `yarn.lock` file will update automatically.

> **Note:** If dependencies are manually modified in a `package.json` file, yarn will only update the `yarn.lock` file the next time the yarn CLI is used to install or modify dependencies. So if modifying dependencies in `package.json`, be sure to run `yarn install` to update the `yarn.lock` file.

The purpose of a lock file is to **lock** down the versions of the dependencies specified in a `package.json` file. This means that in a `yarn.lock` file, there is an _identifier_ for every dependency and sub dependency that is used for a project. What I mean by _identifier_ is there is a block in the `yarn.lock` file that describes the exact version of an installed dependency. It looks like the following:

```
react@16.8.3:
    version "16.8.3"
    resolved "https://registry.yarnpkg.com/react/-/react-16.8.3.tgz#c6f988a2ce895375de216edcfaedd6b9a76451d9"
    integrity sha512-3UoSIsEq8yTJuSu0luO1QQWYbgGEILm+eJl2QN/VLDi7hL+EN18M3q3oVZwmVzzBJ3DkM7RMdRwBmZZ+b4IzSA==
    dependencies:
    loose-envify "^1.1.0"
    object-assign "^4.1.1"
    prop-types "^15.6.2"
    scheduler "^0.13.3"
```

The above identifier found in the `yarn.lock` file specifies that react version **16.8.3** is installed, and it gives the registry URL where the package can be installed, an integrity hash (making sure the dependency's files haven't been modified), and a list of sub dependencies (i.e. dependencies required by the dependency). Looking further into the `yarn.lock` file will show the identifiers for the sub dependencies. For example here is another identifier for the _object-assign_ sub-dependency:

```
object-assign@^4.1.1: version "4.1.1"
    resolved "https://registry.yarnpkg.com/object-assign/-/object-assign-4.1.1.tgz#2109adc7965887cfc05cbbd442cac8bfbb360863"
    integrity sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=
```

So what's the benefit of locking down dependency versions? Well if dependency versions where not locked down, then every time the dependencies are installed through `yarn install`, the fetched dependencies may be different. If one of the dependencies has a new version available and the available version is within the specified [version range](https://docs.npmjs.com/misc/semver#ranges) in the `package.json`, then the newest dependency will be installed.

> **Note:** It can be difficult to remember and grasp how all the [version ranges](https://docs.npmjs.com/misc/semver#ranges) work. However, there is an online calculate that helps to visualize the packages that apply to a [version range](https://semver.npmjs.com/).

As an example take the following dependencies installed in a `package.json` file:

```json
"dependencies": {
    "lodash": "^3.9.1"
}
```

Assuming that the current version of lodash is **3.9.1**, when someone goes to install the dependencies with `yarn install`, they will have version **3.9.1** of lodash installed.

Now, let's assume that lodash releases version **3.9.2** and another person runs `yarn install` for the same `package.json` shown above. That person will have version **3.9.2** of lodash installed because if falls within the **^3.9.1** version range specified in the `package.json` file. Notice how there are now two people that have different versions of lodash installed (**3.9.1** vs **3.9.2**), even though all the code for the repository is the same. As you can see this could cause issues of different behavior manifesting itself on the same app for two separate machines.

Let's go over the above scenario again, but with a `yarn.lock` used to lock dependency versions.

Taking the same `package.json` file as above and assuming that the current version of lodash is **3.9.1**, when someone goes to install the dependencies, they will end up with the following entry within a `yarn.lock` file:

```
lodash@^3.9.1:
    version "3.9.1"
    ...
```

Now, assuming that the `yarn.lock` file is commited to source control ([which it should be](https://yarnpkg.com/lang/en/docs/yarn-lock/#toc-check-into-source-control)), someone else can pull the same code onto their machine and run `yarn install`. No matter what version of lodash has been released (e.g. **3.9.2** or above), the installed version of lodash will be **3.9.1** because that is the version that is specified in the `yarn.lock` file.

## How to upgrade dependencies

Ok, let's stick with the above example with the following dependencies listed in a `package.json` file:

```json
"dependencies": {
    "lodash": "^3.9.1"
}
```

Remember that with a `yarn.lock` you will have a locked version of lodash (in this example, the locked version is set to **3.9.1**):

```
lodash@^3.9.1:
    version "3.9.1"
    ...
```

Now, someone might be confused as to why we specify version ranges in a `package.json` file if the version that gets installed will always be the same, even if a new version of a dependency is released. For example, a range of **^3.9.1** means that it will match any version greater than **3.9.1** and less than **4.0.0**. However, if version **3.9.2** is released, the **3.9.2** version will not be installed if the version of lodash is locked to **3.9.1** in the lock file.

This is where the `yarn upgrade` command comes into play.`yarn upgrade` allows to upgrade all the dependencies listed in a `package.json` to the latest versions specified by the version ranges. So assuming a lock file contains version **3.9.1** of lodash and version **3.10.3** of lodash is available, running `yarn upgrade` will install version **3.10.3** and the `yarn.lock` file will update to the following:

```
lodash@^3.9.1:
    version "3.10.3"
    ...
```

### Upgrading dependencies to latest version

To upgrade to the latest version of a dependency **ignoring the version range** specified in the `package.json` file, the `yarn upgrade --latest` command can be executed.

So for the following dependencies in `package.json`:

```json
"dependencies": {
    "lodash": "^3.9.1"
}
```

If version **4.17.14** of lodash is released, then running `yarn upgrade --latest` will install version **4.17.14** and update the `yarn.lock` file to the following:

```
lodash@^4.17.14:
    version "4.17.14"
    ...
```

Yarn will also automatically update the version range in the `package.json` to the following:

```
"dependencies": {
    "lodash": "^4.17.14"
}
```

## Interactive upgrade

For a repository that has many dependencies, it might be useful to view a list of the available latest upgrades that can be made for all dependencies. Executing `yarn upgrade-interactive --latest` will list all the dependencies that can be upgraded. Dependencies in the list can be selected to upgrade them to their latest versions.

As an example, here's what it looks like when I run `yarn upgrade-interactive --latest` on my blog:

![Output of running the `yarn-upgrade-interactive` command](./images/yarn-upgrade-interactive.png)

As you can see, it's quite a useful representation of which dependencies can be upgraded. Also, notice how the dependencies with new major versions available are highlighted in red to warn of breaking changes.

---

That's all I wanted to share regarding `yarn.lock` files. I've found there is a lot of confusion and misunderstanding regarding these lock files, so hopefully this helps to clear some of the confusion. Let me [know on Twitter](https://twitter.com/RobertCooper_RC) if you have other useful information regarding `yarn` or `yarn.lock` files.

---

## Useful Resources

[Explanation by npm on the use of lock files](https://docs.npmjs.com/files/package-locks)
