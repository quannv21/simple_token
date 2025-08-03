;; Simple Token Contract - Hackathon MVP
;; Basic SIP-010 compliant token with essential functions

;; Define the token
(define-fungible-token simple-token)

;; Constants
(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-not-token-owner (err u101))
(define-constant err-insufficient-balance (err u102))

;; Token name and symbol
(define-read-only (get-name)
  (ok "Simple Token"))

(define-read-only (get-symbol)
  (ok "SIMP"))

(define-read-only (get-decimals)
  (ok u6))

;; Get total supply
(define-read-only (get-total-supply)
  (ok (ft-get-supply simple-token)))

;; Get balance of a user
(define-read-only (get-balance (user principal))
  (ok (ft-get-balance simple-token user)))

;; Transfer function
(define-public (transfer (amount uint) (from principal) (to principal) (memo (optional (buff 34))))
  (begin
    (asserts! (is-eq from tx-sender) err-not-token-owner)
    (ft-transfer? simple-token amount from to)))

;; Mint function (owner only)
(define-public (mint (amount uint) (to principal))
  (begin
    (asserts! (is-eq tx-sender contract-owner) err-owner-only)
    (ft-mint? simple-token amount to)))

;; SIP-010 trait compliance
(define-read-only (get-token-uri)
  (ok none))

;; Initialize with some tokens for the owner
(ft-mint? simple-token u1000000 contract-owner)