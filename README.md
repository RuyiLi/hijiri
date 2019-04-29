# hijiri
An API for generating placeholder avatars.

# Usage
Request URL: https://hijiri.glitch.me

## Options:

`size` - The width and height of the avatar, in px. Defaults to `640`.

`blocks` - The number of blocks. Defaults to `5`. This means that there will be 5 rows and 5 columns of squares.

`color` - The color of the blocks. Defaults to a random color. The pound sign is not included (e.g. `FF0000` instead of `#FF0000`).

`bgColor` - The background color of the avatar. Defaults to `EDEDED`. The pound sign is not included (e.g. `FF0000` instead of `#FF0000`). To make the background transparent, set this value to `transparent`.

## Example query:

https://hijiri.glitch.me?size=1024&blocks=6&color=C0FF33&bgColor=181818

![Example](https://hijiri.glitch.me?size=1024&blocks=6&color=C0FF33&bgColor=181818)