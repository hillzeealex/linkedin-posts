# Post #004 — Prompt Engineering (RAG / Agents)
**Date :** à planifier
**Thème :** LLM / Prompting

---

## Version finale

---

La majorité des prompts LLM en production sont écrits comme des messages Slack.

Et ça se voit dans les résultats.

---

Quand tu construis un système RAG ou un agent autonome, ton prompt n'est pas une conversation — c'est une **spécification**.

Le modèle ne devine pas ce que tu veux. Il complète ce que tu as commencé.

Le problème concret :
Un prompt vague → le LLM improvise → ton agent fait n'importe quoi → tu debugges pendant 3h sans comprendre pourquoi.

---

Ce que j'utilise maintenant en prod, tiré de *Prompt Engineering for LLMs* (Berryman & Ziegler, O'Reilly) :

**Structurer le prompt avec des balises XML explicites.**

```
<role>Tu es un assistant RAG. Tu réponds uniquement à partir du contexte fourni.</role>

<context>
{{ documents_retrieved }}
</context>

<constraints>
- Si la réponse n'est pas dans le contexte, réponds : "Je ne sais pas."
- Ne complète jamais avec tes connaissances générales.
- Format de réponse : JSON { answer, source_ids }
</constraints>

<question>{{ user_query }}</question>
```

Résultat immédiat :
— Zéro hallucination sur mes agents de récupération documentaire
— Output JSON stable, parsable directement par l'agent suivant
— Comportement identique d'un appel à l'autre (critique en multi-agent)

---

→ Un LLM bien prompté n'est pas plus intelligent — il est **prévisible**
→ Les balises XML forcent le modèle à séparer rôle, données et tâche
→ En multi-agent, un output flou = une erreur en cascade dans toute ta pipeline

---

Tu utilises quoi pour structurer tes prompts en prod ? XML, Markdown, JSON schema ?

#LLM #PromptEngineering #RAG #AIAgents #Python #ClaudeAI #GenAI #Productivité
