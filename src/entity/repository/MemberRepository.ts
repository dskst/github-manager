export default interface MemberRepository {
    fetch(id: String): Promise<boolean>
}