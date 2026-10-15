Direct implementation, skip specs and plans
- Do not make a separate test file
- Do no exhaustive tests nor verifications
- Don't create new files unless explicitly told to
- Use FFF, codegraph, and codedb for exploration

Keep code straightforward and readable. Avoid defensive programming “just in case.”

-Trust documented API/database contracts; don't repeatedly type-check every field.
- Don't invent payload variants, nested metadata probing, or fallback chains without concrete evidence.
- Validate real trust boundaries and required business rules, not every conceivable malformed input.
- Preserve authentication, account/session isolation, and side-effect guards.
- Prefer clear control flow and cohesive functions; don't hide check-heavy code behind layers of tiny helpers.

cut the bullshit