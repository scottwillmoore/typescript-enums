# https://github.com/rstudio/rmarkdown/blob/main/R/github_document.R
# https://tex.stackexchange.com/questions/679319/pandoc-citations-dont-link-to-the-reference
# --to gfm-raw_html \

pandoc ./in.md \
    \
    --from markdown \
    --to gfm \
    --citeproc \
    --bibliography ./bibliography.bib \
    --csl ./ieee.csl \
    --metadata link-citations:true \
    \
    --output ./out.md
