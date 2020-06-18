# dot/dots

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
