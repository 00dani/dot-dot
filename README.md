# dot-dots

A fast and easy bootstrap for my dotfiles that also acts as a simple management script once installed. Bootstrapping is as simple as:

```zsh
curl https://dots.00dani.id.au | zsh
```

If you're wary about piping scripts into your shell - [you should be](https://www.seancassidy.me/dont-pipe-to-your-shell.html) - then feel free to download the script and check it out first. `dots` *is* [designed to crash harmlessly](https://dots.00dani.id.au/partial-dl-test) rather than run something dangerous if `curl` is interrupted, however.

```zsh
curl https://dots.00dani.id.au > dots
less dots
# reviewing ... looks okay!
zsh dots
```

When run through either of these methods, `dots` will install itself, [GNU Stow](https://www.gnu.org/software/stow/) (if not already installed globally), and my configuration for [git](https://github.com/00dani/dot-git), [vim](https://github.com/00dani/dot-vim), and [zsh](https://github.com/00dani/dot-zsh).

Packages are installed by `dots` to `~/dotfiles` and then linked into `~` using Stow. I'll be adding flags for customising these paths, as well as adjusting which packages the bootstrap immediately installs.
