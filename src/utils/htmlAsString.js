export const htmlAsString = `
  <!doctype html>
  <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>hianime-API</title>

          <style>
              :root {
                  --bg: #0b0e14;
                  --card: #121826;
                  --text: #e6e8ee;
                  --muted: #9aa4bf;
                  --accent: #7c7cff;
                  --danger: #ff5c5c;
                  --success: #2dd4bf;
                  --border: #1e263a;
              }

              * {
                  box-sizing: border-box;
              }

              body {
                  margin: 0;
                  font-family:
                      system-ui,
                      -apple-system,
                      BlinkMacSystemFont,
                      "Segoe UI",
                      Roboto,
                      Ubuntu,
                      "Helvetica Neue",
                      sans-serif;
                  background: radial-gradient(
                      1200px 600px at top,
                      #11162a,
                      var(--bg)
                  );
                  color: var(--text);
                  line-height: 1.6;
              }

              a {
                  color: var(--accent);
                  text-decoration: none;
              }

              a:hover {
                  text-decoration: underline;
              }

              header {
                  padding: 4rem 1.5rem 3rem;
                  text-align: center;
              }

              header h1 {
                  font-size: 3rem;
                  margin-bottom: 0.5rem;
                  letter-spacing: 0.5px;
              }

              header p {
                  max-width: 700px;
                  margin: 0 auto;
                  color: var(--muted);
                  font-size: 1.1rem;
              }

              .badge {
                  display: inline-block;
                  margin-top: 1rem;
                  padding: 0.35rem 0.7rem;
                  border-radius: 999px;
                  background: rgba(255, 92, 92, 0.15);
                  color: var(--danger);
                  font-size: 0.8rem;
                  font-weight: 600;
              }

              main {
                  max-width: 1100px;
                  margin: 0 auto;
                  padding: 0 1.5rem 4rem;
              }

              .grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                  gap: 1.2rem;
              }

              .card {
                  background: linear-gradient(
                      180deg,
                      rgba(255, 255, 255, 0.02),
                      rgba(255, 255, 255, 0)
                  );
                  border: 1px solid var(--border);
                  border-radius: 14px;
                  padding: 1.4rem;
              }

              .card h2 {
                  margin-top: 0;
                  font-size: 1.25rem;
                  margin-bottom: 0.6rem;
              }

              .card p {
                  color: var(--muted);
                  margin: 0.3rem 0;
              }

              code {
                  display: inline-block;
                  background: #0a0f1f;
                  border: 1px solid var(--border);
                  border-radius: 6px;
                  padding: 0.25rem 0.45rem;
                  font-family:
                      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                      "Liberation Mono", monospace;
                  font-size: 0.85rem;
                  color: var(--success);
              }

              pre {
                  background: #0a0f1f;
                  border: 1px solid var(--border);
                  border-radius: 12px;
                  padding: 1rem;
                  overflow-x: auto;
                  margin: 0.8rem 0 0;
              }

              pre code {
                  display: block;
                  padding: 0;
                  border: none;
                  color: #c7d2fe;
              }

              .section {
                  margin-top: 3rem;
              }

              .section h2 {
                  margin-bottom: 1rem;
                  font-size: 1.6rem;
              }

              footer {
                  border-top: 1px solid var(--border);
                  padding: 2rem 1.5rem;
                  text-align: center;
                  color: var(--muted);
                  font-size: 0.9rem;
              }

              footer a {
                  margin: 0 0.4rem;
              }
              .btn {
                  background-color: #fff;
                  color: #000;
                  padding: 4px 8px;
                  border-radius: 10px;

              }
          </style>
      </head>

      <body>
          <header>
              <h1>📺 hianime-API</h1>
              <p>
                  An unofficial REST API that scrapes anime data from
                  <strong>hianimez.to</strong>. Built for developers who want
                  anime data without dealing with scraping.
              </p>
              <div class="badge">UNOFFICIAL · SELF-HOST ONLY</div>
              <div style="margin-top: 10px;">
                  <button class="btn">
                      <a style="color: black; font-weight: 500; font-size: 17px;" href="/doc"> SCALAR DOCS </a>
                  </>
                  <button class="btn">
                      <a href="/swagger" style="color: black; font-weight: 500; font-size: 17px;" > SWAGGER DOCS </a>
                  </>
              </div>
          </header>

          <main>
              <section class="grid">
                  <div class="card">
                      <h2>🚀 Base URL</h2>
                      <p>All endpoints are served under:</p>
                      <p><code>/api/v1</code></p>
                  </div>

                  <div class="card">
                      <h2>📦 Response Format</h2>
                      <p>Every response follows a standard structure:</p>
                      <pre><code>{
      "success": true,
      "data": {}
    }</code></pre>
                  </div>

                  <div class="card">
                      <h2>⚠️ Disclaimer</h2>
                      <p>
                          This API is not affiliated with hianimez.to. All content
                          belongs to its original owners.
                      </p>
                      <p>
                          Use for
                          <strong>educational and personal</strong> purposes only.
                      </p>
                  </div>
              </section>

              <section class="section">
                  <h2>📚 Core Endpoints</h2>
                  <div class="grid">
                      <div class="card">
                          <h2>🏠 Home</h2>
                          <p><code>GET /home</code></p>
                          <p>Trending, spotlight, top airing, latest episodes.</p>
                      </div>

                      <div class="card">
                          <h2>🎬 Anime Details</h2>
                          <p><code>GET /anime/{animeId}</code></p>
                          <p>examples</p>
                          <p><code>one-piece-100</code></p>
                          <p><code>attack-on-titan-112</code></p>
                          <p><code>code-geass-lelouch-of-the-rebellion-41</code></p>
                          <p>Full metadata, episodes, recommendations.</p>
                      </div>

                      <div class="card">
                          <h2>📃 Anime List</h2>
                          <p><code>GET /{query}</code></p>
                          <p>example</p>
                          <p><code>
                          top-airing
                          </code></p>
                          <p><code>
                          most-popular
                          </code></p>
                          <p><code>
                          most-favorite
                          </code></p>
                          <p><code>
                          completed
                          </code></p>
                          <p><code>
                          recently-added
                          </code></p>
                          <p><code>
                          recently-updated
                          </code></p>
                          <p><code>
                          top-upcoming
                          </code></p>
                          <p><code>
                          subbed-anime
                          </code></p>
                          <p><code>
                          dubbed-anime
                          </code></p>
                          <p><code>
                          movie
                          </code></p>
                          <p><code>
                      tv
                          </code></p>
                          <p><code>
                          ova
                          </code></p>
                          <p><code>
                          ona
                          </code></p>
                          <p><code>
                          special
                          </code></p>
                          <p>Popular, top airing, movies, TV, OVA.</p>
                      </div>

                      <div class="card">
                          <h2>🔤 AZ List</h2>
                          <p><code>GET /az-list/{letter}</code></p>
                          <p>AZ List</p>
                      </div>
                      <div class="card">
                          <h2> 👊 genre</h2>
                          <p><code>GET /genre/{genre}</code></p>
                          <p>anime List By Genre.</p>
                      </div>
                      <div class="card">
                          <h2>🔍 Search</h2>
                          <p><code>GET /search?keyword=naruto</code></p>
                          <p>Search anime with pagination & suggestions.</p>
                      </div>

                      <div class="card">
                          <h2>📺 Episodes</h2>
                          <p><code>GET /episodes/{animeId}</code></p>
                          <p>Episode list for a specific anime.</p>
                      </div>

                      <div class="card">
                          <h2>▶️ Streaming</h2>
                          <p>
                              <code
                                  >GET
                                  /stream?id=EP_ID&server=vidcloud&type=sub</code
                              >
                          </p>
                          <p>HLS streams, subtitles, intro/outro timestamps.</p>
                      </div>
                  </div>
              </section>

              <section class="section">
                  <h2>🔧 Quick Start</h2>
                  <div class="card">
                      <pre><code>git clone https://github.com/yahyaMomin/hianime-API.git
    cd hianime-API
    bun install
    bun run dev</code></pre>
                      <p>Server runs on <code>http://localhost:3030</code></p>
                  </div>
              </section>
          </main>

          <footer>
              <p>
                  Built by
                  <a href="https://github.com/yahyaMomin" target="_blank"
                      >yahyaMomin</a
                  >
                  ·
                  <a
                      href="https://github.com/yahyaMomin/hianime-API"
                      target="_blank"
                  >
                      GitHub
                  </a>
                  ·
                  <a
                      href="https://github.com/yahyaMomin/watanuki"
                      target="_blank"
                  >
                      Frontend Example
                  </a>
              </p>
              <p>⭐ Star the repo if it helped you</p>
          </footer>
      </body>
  </html>
  `;
