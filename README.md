# Treasure Marketing Site

## Local Development

Check out the repo and install dependencies in the root folder:

```sh
npm install
```

Create environment variable file and fill in relevant environment variables:

```sh
cp .env.sample .env
```

Start application:

```sh
npm run dev
```

## Deployment

Merge to the `main` branch to deploy to the [development environment](https://treasure-website-staging.fly.dev).

Add a tag with the `v` prefix to deploy to the [production environment](https://treasure.lol) (e.g., `v20241003`).

## Managing team members

1. Add the new member's PFP [in this GitHub issue](https://github.com/TreasureProject/treasure-website-team-images/issues/1) by dragging and dropping the image into the comment box.
2. Copy the link that GitHub generates for the image.
3. Go to [this GitHub issue](https://github.com/TreasureProject/treasure-website/issues/290) and click on the `edit` button in the top right.
4. Add the new member's name and the link to their PFP in the following format:

```markdown
### [name]

- **Title**: [title]
- **Image**: [image link copied from step 2]
- **Twitter**: [twitter link if they have one. If not, remove this entire line]
- **Discord**: [discord username if they have one. If not, remove this entire line]
```

5. Click `Update comment` and you're done!

Removing a member is as simple as deleting their entry from the list.
