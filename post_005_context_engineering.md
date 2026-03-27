# Post #005 — Context Engineering
**Date :** à planifier
**Thème :** LLM / Agents

---

## Version finale

---

"Prompt engineering" est en train de mourir.

Pas parce que les prompts n'ont plus d'importance. Mais parce qu'on a trouvé mieux.

---

Le nouveau terme qui s'impose chez les équipes qui buildent vraiment des agents : **Context Engineering**.

La différence est fondamentale.

Le prompt engineering, c'est : comment j'écris mon instruction pour que le LLM réponde bien.
Le context engineering, c'est : quels sont exactement les tokens dans la fenêtre de contexte à chaque appel pour que l'agent se comporte comme prévu.

Sur un agent RAG ou multi-agent, ce n'est plus juste ton system prompt qui compte.
C'est l'ensemble : instructions, historique de conversation, résultats d'outils, documents récupérés, exemples few-shot.

---

Ce que j'ai changé concrètement dans mes pipelines après avoir lu le post d'Anthropic Engineering là-dessus :

**1 — Je traite le contexte comme une ressource finie.**
Phénomène appelé "context rot" : au-delà d'un certain volume de tokens, le modèle perd en précision sur les infos en début de contexte. J'évite de charger tout en amont.

**2 — Je charge l'info au moment où l'agent en a besoin.**
Plutôt que de dumper 40 documents RAG d'un coup, l'agent récupère dynamiquement via des outils (query, grep, read). Il garde le contexte court et pertinent.

**3 — Mes outils sont minimalistes et non-redondants.**
Si moi j'hésite sur quel outil utiliser dans quelle situation, l'agent hésitera aussi. 1 outil = 1 responsabilité claire.

---

→ Prompt engineering = écrire une bonne instruction
→ Context engineering = gérer ce que le modèle voit à chaque inférence dans un système entier
→ En multi-agent, un contexte mal géré = comportement imprévisible en cascade

---

Tu as déjà eu des agents qui dérivent ou hallucinent après quelques tours de conversation ? C'est presque toujours un problème de contexte, pas de prompt.

#LLM #ContextEngineering #AIAgents #RAG #PromptEngineering #ClaudeAI #GenAI #Python
