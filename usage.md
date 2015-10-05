# [hologram](https://github.com/trulia/hologram)

Ruby製のスタイルガイド生成ツール。

## Install

```
$ sudo gem install hologram
```


## Init

```
$ hologram init
```
`hologram init`で生成されるファイルは以下。

- `hologram_config.yml` -> 設定ファイル
- `doc_assets/` -> テンプレートファイル用のディレクトリ
- `doc_assets/_header.html` -> テンプレートヘッダー
- `doc_assets/_footer.html` -> テンプレートフッター
- `code_example_templates/` -> 例文コードのテンプレートファイル用のディレクトリ
- `code_example_templates/markdown_example_template.html.erb` -> `markdown_example`用のテンプレート
- `code_example_templates/markdown_table_template.html.erb` -> `markdown_table`用のテンプレート
- `code_example_templates/js_example_template.html.erb` -> `js_example`用のテンプレート
- `code_example_templates/jsx_example_template.html.erb` -> `jsx_example`用のテンプレート


## Config

`hologram_config.yml`を環境に合わせて編集する。

```
# ソースファイルのディレクトリの相対パス
source: ./src/search/scss/

# ドキュメントが生成されるディレクトリへの相対パス
destination: ./docs

# ドキュメントに必要となるアセットのディレクトリ。関連する画像やCSSなど含め。
documentation_assets: ./doc_assets

# 例文コードのテンプレートを格納するディレクトリ
code_example_templates: ./code_example_templates

# カスタムの例文コードのテンプレートを格納するディレクトリ
code_example_renderers: ./code_example_renderers

# 他に必要なアセットを格納するディレクトリ
dependencies:
  - ./build

# どのカテゴリをindexページにするか
index: basics

# どのセクションまでナビゲーションに表示するか
nav_level: all

# 警告があった時にhologramを終了するか
exit_on_warnings: false

```


## Doc

css, scss, sassに指定の形式でドキュメントを書く。

```
/*doc
---
title: contents
name: contents
category: basics
---
\```html_example
<div class="contents"></div>
\```
*/
```


## Custom Markdown

カスタムのmarkdownを使いたい場合、configに`custom_markdown`を定義する。

```
custom_markdown: ./custom_render.rb
```

`RedCarpet::Render::HTML`クラスを拡張するクラスの名前をファイル名につける。hologramのリポジトリに[例](https://github.com/trulia/hologram/blob/master/example_markdown_renderer.rb.example)があるので参照。




---

## Links

- [Hologram — Style Documentation Build System](http://trulia.github.io/hologram/)
- [trulia/hologram-example](https://github.com/trulia/hologram-example)
- [hologramでカスタムスタイルガイド - 機能概要 | CodeGrid](https://app.codegrid.net/entry/hologram-1)

