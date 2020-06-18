# dot/dots [![Netlify Status](https://api.netlify.com/api/v1/badges/807fb452-bfd3-406b-89f2-df1f2f239567/deploy-status)](https://app.netlify.com/sites/festive-gates-32b759/deploys)

A fast and easy bootstrap for my dotfiles that also acts as a simple management script once installed. Bootstrapping is as simple as:

```zsh
curl https://dots.00dani.me | zsh
```

If you're wary about piping scripts into your shell - [you should be](https://www.seancassidy.me/dont-pipe-to-your-shell.html) - then feel free to download the script and check it out first. `dots` *is* [designed to crash harmlessly](https://dots.00dani.me/partial-dl-test) rather than run something dangerous if `curl` is interrupted, however.

```zsh
curl https://dots.00dani.me > dots
less dots
# reviewing ... looks okay!
zsh dots
```

When run through either of these methods, `dots` will install itself, [GNU Stow](https://www.gnu.org/software/stow/) (if not already installed globally), and my configuration for [git](https://git.00dani.me/dot/git), [vim](https://git.00dani.me/dot/vim), and [zsh](https://git.00dani.me/dot/zsh).

By default, packages are installed by `dots` to `~/dotfiles` and then linked into `~` using Stow. Environment variables are available for customising this behaviour.

## Environment Variables

* `DOTFILES` - the location to clone new packages. Defaults to `~/dotfiles`.
  Don't set it to `~`, because that'll just be super confusing.
* `DOTS_SOURCE_PREFIX` - a URL prefix that will be prepended to simple package
  names, like "git" and "vim". Defaults to `https://git.00dani.me/dot`. You
  might want to change this to point at your own Git hosting.
* `STOW` - which GNU Stow binary to use. Defaults to `stow`. You probably don't
  need to change this.
* `HOME` - the target directory for linking packages. Probably not a good idea
  to change this either.

## Subcommands

Much like `git` and many other tools, `dots` is based around subcommands for accessing particular functions. The available commands are:

### `bootstrap`

Set up dotfiles on a brand-new system. Will create a `DOTFILES` package directory, clone GNU Stow into it if necessary, clone itself and other default packages, and then link everything using Stow. This is the default command if `dots` is run on a system where `DOTFILES` doesn't already exist, leading to the succinct bootstrap snippet shown above.

### `clone`

Will clone one or more packages specified into your `DOTFILES` directory. Packages must be specified as Git repository URLs, but two forms of shorthand are supported:

* GitHub package paths: "sharkdp/bat", "hlandau/acmetool". "https://github.com/" will automatically be prepended to find the correct GitHub repository.
* Simple package names: "git", "emacs", "task". The entire `DOTS_SOURCE_PREFIX` is prepended to these names, hopefully producing a URL that points to your self-hosted Git service.

### `fetch`

Will simply run `git fetch -p` for each of the specified package names. If there are no package names provided, will implicitly run over *all* packages.

### `link`

Will employ GNU Stow to symlink each of the packages specified by name into your `HOME`. If no package names are provided, will implicitly link all packages.

### `pull`

Very similar to `fetch`. Will simply run `git pull` for each of the specified package names. If there are no package names provided, will implicitly run over *all* packages.

### `status`

Can be abbreviated to `st`. Will list all packages you have cloned into your dotfiles directory, along with their Git status (whether the working directory is clean, whether there are commits to push or pull, that sort of thing). This command is the default if you have already bootstrapped.
