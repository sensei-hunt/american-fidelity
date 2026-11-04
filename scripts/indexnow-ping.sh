#!/bin/bash
# IndexNow ping script — run after deploy to notify search engines of updated URLs
# Usage: bash scripts/indexnow-ping.sh
# Requires: curl
# Key file must exist at: /737fa7483db4d2e1238b3d59e4832254.txt

HOST="secured-americanfidelity.com"
KEY="737fa7483db4d2e1238b3d59e4832254"
KEY_LOCATION="https://${HOST}/${KEY}.txt"

URLS=(
  "https://${HOST}/"
  "https://${HOST}/login"
  "https://${HOST}/register"
  "https://${HOST}/benefits-guide"
  "https://${HOST}/claims-help"
  "https://${HOST}/faq-af"
  "https://${HOST}/security-af"
  "https://${HOST}/contact-af"
  "https://${HOST}/disability-insurance"
  "https://${HOST}/cancer-insurance"
  "https://${HOST}/critical-illness-insurance"
  "https://${HOST}/hospital-indemnity-insurance"
  "https://${HOST}/accident-insurance"
  "https://${HOST}/life-insurance"
  "https://${HOST}/std-vs-ltd"
  "https://${HOST}/term-vs-whole-life"
  "https://${HOST}/is-american-fidelity-the-same-as-fidelity"
  "https://${HOST}/american-fidelity-vs-aflac"
  "https://${HOST}/american-fidelity-vs-colonial-life"
  "https://${HOST}/how-to-file-disability-claim"
  "https://${HOST}/how-to-file-cancer-claim"
  "https://${HOST}/how-to-file-accident-claim"
  "https://${HOST}/glossary"
  "https://${HOST}/open-enrollment"
  "https://${HOST}/section-125-cafeteria-plan"
  "https://${HOST}/about-american-fidelity"
)

# Build JSON payload
URL_LIST=""
for url in "${URLS[@]}"; do
  URL_LIST="${URL_LIST}\"${url}\","
done
URL_LIST="${URL_LIST%,}"

PAYLOAD="{\"host\":\"${HOST}\",\"key\":\"${KEY}\",\"keyLocation\":\"${KEY_LOCATION}\",\"urlList\":[${URL_LIST}]}"

echo "Pinging IndexNow with ${#URLS[@]} URLs..."

# Ping IndexNow API (covers Bing, Yandex, Seznam, Naver)
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X POST \
  "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "${PAYLOAD}")

if [ "$RESPONSE" = "200" ] || [ "$RESPONSE" = "202" ]; then
  echo "IndexNow accepted (HTTP ${RESPONSE}) — ${#URLS[@]} URLs submitted"
else
  echo "IndexNow returned HTTP ${RESPONSE}"
fi
