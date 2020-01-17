export default interface MemberRepository {
    exists(): Promise<boolean>
}