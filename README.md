# dot-dots

A fast and easy bootstrap for my dotfiles that also acts as a simple management script once installed. Bootstrapping is as simple as:

```zsh
curl 'https://dots.00dani.id.au' | zsh
```

`dots` will then install itself, [GNU Stow](https://www.gnu.org/software/stow/) (if not already installed globally), and my configuration for [git](https://github.com/00dani/dot-git), [vim](https://github.com/00dani/dot-vim), and [zsh](https://github.com/00dani/dot-zsh).

Packages are installed by `dots` to `~/dotfiles` and then linked into `~` using Stow. I'll be adding flags for customising these paths, as well as adjusting which packages the bootstrap immediately installs.
