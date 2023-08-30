---
title: HashiCorp Vault
---

To configure Score with <a href="https://www.vaultproject.io/" target="_blank">HashiCorp's Vault</a> , modify your `.env.score` file as follows:

```bash
SPRING_CLOUD_VAULT_ENABLED="true"
```

If you are using HashiCorp's Vault, set this to `true`. Otherwise, set it to `false`. Typically, most deployments will not utilize Vault, and this value should default to `false`.
