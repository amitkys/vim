# Vim Command
### 1. vs code tab manage
* `:ls` let you open all tab in buffer
* `gt` or `bn` let you move tab in forword direction
* `gT` or `bp` in backword direction
* `bd` to close tab
### 2. Development
* `vit` to select whatever have inside in an element like (div or h1 etc)
* `vat` to select entire element
* `zc` fold(close) element area
* `zo` unfold(open) element area
* `zM` fold all element in a file
* `zR` unfold all element in a file
### 3. Navigate
* `gd` (move cursor there)goto file definitions



### Updated Steps for Deploying a React App with `dist` Folder

1. **Build Your React App**:
   Run the build command for your project:
   ```bash
   npm run build
   ```
   This generates a `dist/` directory containing the optimized static files.

2. **Install `gh-pages`**:
   If not already installed, add the `gh-pages` package:
   ```bash
   pnpm add gh-pages -D
   ```
   Or:
   ```bash
   npm install gh-pages --save-dev
   ```


   ```

   Replace:
   - `<your-username>` with your GitHub username.
   - `<repository-name>` with your repository's name.


   
   This will push the contents of the `dist/` folder to the `gh-pages` branch of your repository.

5. **Configure GitHub Pages**:
   - Go to your repository on GitHub.
   - Navigate to **Setts > Pages**.
   - Under the "Source" section, select the `gh-pages` branch and click **Save**.

6. **Access Your Deployed App**:
   The app will be live at `https://<your-username>.github.io/<repository-name>`.

---

### Notes:
- If your app uses **React Router**, ensure you configure your routes to work with GitHub Pages by adding a `redirect` configuration in your app or an `_redirects` file.
- If you're using a custom domain, configure it in the GitHub Pages settings.

Let me know if you face any issues!

